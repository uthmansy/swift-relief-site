import TopNav from "../components/Header/TopNav";
import ContactSection from "../components/ContactSection";
import Container from "../components/Container";
import Footer from "../components/blocks/Footer";
import NewsSection from "../components/blocks/NewsSection";

function NewsPage() {
  return (
    <>
      <TopNav />
      <section className="py-15">
        <Container>
          <span className="inline-flex items-center text-red-700 font-medium">
            News
          </span>

          <h1 className="text-3xl font-bold text-green-800 lg:text-5xl max-w-3xl">
            Stay upto date with our latest News
          </h1>
          <NewsSection />
        </Container>
      </section>
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </>
  );
}

export default NewsPage;
