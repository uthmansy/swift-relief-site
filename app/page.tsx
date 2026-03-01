import Header from "./components/Header";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import BlogSection from "./components/blocks/BlogSection";
import Container from "./components/Container";
import Footer from "./components/blocks/Footer";
import VideoSection from "./components/blocks/VideoSection";
import Team from "./components/Team";
import NewsSection from "./components/blocks/NewsSection";
import PublicationsList from "./components/PublicationsList";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      {/* <section className="bg-neutral-200 py-10">
        <Container>
          <BlogSection />
        </Container>
      </section> */}
      <section className="py-14 bg-neutral-50">
        <Container>
          <VideoSection />
        </Container>
      </section>

      <Mission />
      <section className="bg-neutral-200 py-10">
        <Container>
          <span className="uppercase text-sm text-red-600 font-medium">
            News
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-green-800">
            Stay upto date with our latest News
          </h2>
          <NewsSection />
        </Container>
      </section>
      <section className="py-15">
        <Container>
          <span className="uppercase text-sm text-red-600 font-medium">
            Our Publications
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-green-800">
            Stay upto date with our latest Publications
          </h2>
          <PublicationsList />
          <div className="inline-block bg-white border border-gray-200 shadow-2xs rounded-full">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <p className="text-gray-600">Want to read more?</p>
              <Link
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                href="/publications"
              >
                Go here
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14 bg-neutral-50">
        <Container>
          <Team />
        </Container>
      </section>
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}
