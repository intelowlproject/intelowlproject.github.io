import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SITE_URL = "https://intelowlproject.github.io";
const BLOG_DIR = "Blogs";
const OUTPUT_PATH = "public/feed.xml";

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    meta[key] = value;
  }
  return { meta, body: match[2] };
}

function stripMarkdown(text) {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1") // links -> text
    .replace(/#{1,6}\s+/g, "") // headings
    .replace(/[*_~`>]/g, "") // emphasis, code, blockquote markers
    .replace(/\n{2,}/g, " ") // collapse newlines
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, "");
}

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));

  const posts = [];
  for (const file of files) {
    const raw = await readFile(join(BLOG_DIR, file), "utf-8");
    const parsed = parseFrontmatter(raw);
    if (!parsed) continue;

    const { meta, body } = parsed;
    const slug = slugFromFilename(file);
    const plainBody = stripMarkdown(body);
    const description =
      plainBody.length > 250 ? plainBody.slice(0, 250) + "..." : plainBody;

    posts.push({
      title: meta.title || slug,
      date: meta.date || "1970-01-01",
      author: meta.author || "IntelOwl Project",
      slug,
      description,
    });
  }

  posts.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  const now = new Date().toUTCString();

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blogs/${p.slug}</link>
      <guid>${SITE_URL}/blogs/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(p.author)}</dc:creator>
      <description>${escapeXml(p.description)}</description>
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>IntelOwl Project Blog</title>
    <link>${SITE_URL}/blogs</link>
    <description>Latest updates from the IntelOwl Project</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  await writeFile(OUTPUT_PATH, rss, "utf-8");
  console.log(`RSS feed generated: ${OUTPUT_PATH} (${posts.length} posts)`);
}

main().catch((err) => {
  console.error("Failed to generate RSS feed:", err);
  process.exit(1);
});
