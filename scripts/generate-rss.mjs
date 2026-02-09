import { readFile, writeFile } from "node:fs/promises";
import RSS from "rss";

const SITE_URL = "https://intelowlproject.github.io";
const POSTS_JSON = ".contentlayer/generated/Post/_index.json";
const OUTPUT_PATH = "public/feed.xml";

async function main() {
  const posts = JSON.parse(await readFile(POSTS_JSON, "utf-8"));
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const feed = new RSS({
    title: "IntelOwl Project Blog",
    description: "Latest updates from the IntelOwl Project",
    feed_url: `${SITE_URL}/feed.xml`,
    site_url: `${SITE_URL}/blogs`,
    language: "en",
  });

  for (const post of posts) {
    const plain = post.body.html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    feed.item({
      title: post.title,
      description: plain.length > 250 ? plain.slice(0, 250) + "..." : plain,
      url: `${SITE_URL}${post.url}`,
      author: post.author || "IntelOwl Project",
      date: new Date(post.date),
    });
  }

  await writeFile(OUTPUT_PATH, feed.xml({ indent: true }), "utf-8");
  console.log(`RSS feed generated: ${OUTPUT_PATH} (${posts.length} posts)`);
}

main().catch((err) => {
  console.error("Failed to generate RSS feed:", err);
  process.exit(1);
});
