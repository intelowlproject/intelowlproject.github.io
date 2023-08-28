import { format, parseISO } from "date-fns";
import { allPosts } from "../../../../.contentlayer/generated";
import { Header } from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";

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
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <>
      <Header blogsection={true}></Header>
      <main className="h-full md:mx-16 mx-5 md:mt-52 mt-28">
        <div className="mb-8 md:space-y-4">
          <div className="flex flex-row justify-between items-center">
          <time
            dateTime={post.date}
            className="font-SpaceGrotesk text-white py-5 opacity-70 text-sm md:text-md mb-5 "
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h3 className="font-SpaceGrotesk text-white py-5 opacity-90 text-sm md:text-md mb-5 ">By {post.author}</h3>
          </div>
          <h1 className="text-white font-SpaceGrotesk font-bold text-3xl md:text-6xl pb-12">
            {post.title}
          </h1>
          <Image
            src={post.cover}
            width={100}
            height={100}
            alt={""}
            className="pb-12"
          ></Image>
        </div>
        <div
          className="font-SpaceGrotesk prose text-md text-white text-left py-5 opacity-70 [&>*]:mb-5 [&>*:last-child]:mb-7"
          dangerouslySetInnerHTML={{
            __html: post.body.html
              .replace(/<a/g, '<a style="color: #00ADEE;"')
              .replace(
                /<h2/g,
                '<h2 style="font-size: 2rem; font-weight: bold;"'
              )
              .replace(
                /<h3/g,
                '<h3 style="font-size: 1.5rem; font-weight: bold;"'
              )
              .replace(
                /<h1/g,
                '<h1 style="font-size: 2.5rem; font-weight: bold;"'
              )
              .replace(
                /<code/g,
                '<code style="font-weight: semibold; overflow: auto; white-space: pre-wrap; max-height: 300px;"'
              ),
          }}
        />
      </main>
      <Footer></Footer>
    </>
  );
};

export default PostLayout;
