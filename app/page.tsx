"use client";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import BlogSection from "./components/blocks/BlogSection";
import Container from "./components/Container";
import Footer from "./components/blocks/Footer";

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
      <Mission />
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}
