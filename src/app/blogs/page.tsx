import { Header } from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function BlogsPage() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col justify-center items-start h-full w-full ">
        <h1 className="h-screen w-screen"></h1>
        <div id="all-blogs flex">{/* idhar map kardenge */}</div>
      </main>
      <Footer></Footer>
    </>
  );
}
