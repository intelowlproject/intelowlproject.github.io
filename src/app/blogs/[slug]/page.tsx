import { format, parseISO } from "date-fns";
import { allPosts } from "../../../../.contentlayer/generated";
import { Header } from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // For handling HTML if needed

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

//params are written a specfic way as a workaround to make the contentlayer url routing work.
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error('Post not found for slug: ${params.slug}');
return (
  <>
    <Header blogsection={true}></Header>
    <main className="h-full md:mx-16 mx-5 md:mt-52 mt-28">
      <div className="mb-8 md:space-y-4">
        <div className="flex flex-row justify-between items-center">
          <time
            dateTime={post.date}
            className="font-SpaceGrotesk text-white py-5 opacity-70 text-sm md:text-md mb-5"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h3 className="font-SpaceGrotesk text-white py-5 opacity-90 text-sm md:text-md mb-5">By {post.author}</h3>
        </div>
        <h1 className="text-white font-SpaceGrotesk font-bold text-3xl md:text-6xl pb-12">
          {post.title}
        </h1>
        <Image
          src={post.cover}
          width={100}
          height={100}
          alt={post.title}
          className="pb-12"
        />
      </div>
      <div className="font-SpaceGrotesk prose text-md text-white text-left py-5 opacity-70 [&>*]:mb-5 [&>*:last-child]:mb-7">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]} 
          components={{
            a: ({ node, ...props }) => <a style={{ color: '#00ADEE' }} {...props} />,
            h1: ({ node, ...props }) => <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }} {...props} />,
            h2: ({ node, ...props }) => <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }} {...props} />,
            h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} {...props} />,
            code: ({ node, ...props }) => (
              <code
                  style={{
                    color: '#f8f8f2', // Text color for inline code
                    padding: '2px 4px',
                  }}
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  style={{
                    backgroundColor: '#1e1e1e', // Background color for code blocks
                    padding: '1rem',
                    borderRadius: '8px',
                    overflowX: 'auto',
                    
                  }}
                  {...props}
                />
            ),
            ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }} {...props} />,
            ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', marginLeft: '1.5rem' }} {...props} />,
            li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
            table: ({ node, ...props }) => (
              <table className="border-collapse border border-white w-full" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="border border-white p-2 " {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-white p-2" {...props} />
            ),
          }}
        >
          {post.body.raw}
        </ReactMarkdown>
      </div>
    </main>
    <Footer></Footer>
  </>
);
};

export default PostLayout;