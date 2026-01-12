"use client";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import BlogSection from "./components/blocks/BlogSection";
import Container from "./components/Container";
import Footer from "./components/blocks/Footer";
import VideoSection from "./components/blocks/VideoSection";

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
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}
