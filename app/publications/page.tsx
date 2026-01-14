import TopNav from "../components/Header/TopNav";
import Container from "../components/Container";
import Footer from "../components/blocks/Footer";
import PublicationsList from "../components/PublicationsList";

function page() {
  return (
    <div>
      <TopNav />

      <section className="py-10">
        <Container>
          <span className="inline-flex items-center text-sm text-gray-600">
            Publications
          </span>

          <h1 className="text-3xl font-bold text-green-800 lg:text-5xl max-w-3xl">
            Our Publications
          </h1>
          <PublicationsList />
        </Container>
      </section>

      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}

export default page;
