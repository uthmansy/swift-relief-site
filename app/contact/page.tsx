import TopNav from "../components/Header/TopNav";
import ContactSection from "../components/ContactSection";
import Container from "../components/Container";
import Footer from "../components/blocks/Footer";

function ContactPage() {
  return (
    <>
      <TopNav />
      <section className="py-15">
        <Container>
          <span className="inline-flex items-center text-red-700 font-medium">
            Contact us
          </span>

          <h1 className="text-3xl font-bold text-green-800 lg:text-5xl max-w-3xl">
            Get in touch with us
          </h1>
          <ContactSection />
        </Container>
      </section>
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </>
  );
}

export default ContactPage;
