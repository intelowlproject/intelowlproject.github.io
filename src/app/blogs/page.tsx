import { Header } from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { compareDesc} from "date-fns";
import { allPosts } from "../../../.contentlayer/generated";


export default function BlogsPage() {
  const posts = allPosts.sort((firstPost, secondPost) =>
    compareDesc(new Date(firstPost.date), new Date(secondPost.date))
  );
  return (
    <>
      <Header blogsection={true}></Header>
      <main className="flex flex-col justify-center items-center h-full w-full  ">
        <div>
          <h1 className="text-white font-SpaceGrotesk font-bold text-3xl md:text-6xl mt-36 mb-12 ">
            Blogs
          </h1>
        </div>
        <div id="">
          <div className="mx-auto max-w-screen-lg px-8 py-16 sm:px-6 ">
            <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8">
              {posts.map((post, idx) => {
                return (
                  <div
                    key={idx}
                    className="mb-8 bg-[#17171D] sm:break-inside-avoid rounded-2xl border-solid border border-[#212123] space-y-4 p-4"
                  >
                    <h3 className="mb-1 mt-3">
                      <Link
                        href={post.url}
                        className="text-xl mt-12 md:text-3xl font-SpaceGrotesk text-white  py-5 opacity-90"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <div
                      className=" font-SpaceGrotesk text-white py-5 opacity-70 [&>*]:mb-3 [&>*:last-child]:mb-0"
                      dangerouslySetInnerHTML={{ __html: post.body.html.substring(0, 250) + "..." }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
