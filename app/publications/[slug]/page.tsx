import Container from "@/app/components/Container";
import TopNav from "@/app/components/Header/TopNav";
import PDFReader from "@/app/components/PDFReader";
import Footer from "@/app/components/blocks/Footer";
import { publications } from "@/app/lib/publications";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function page({ params }: Props) {
  const { slug } = await params; // ✅ unwrap params

  const publication = publications.find((p) => p.slug === slug);

  if (!publication) return notFound();
  return (
    <div>
      <TopNav />
      <PDFReader pdfUrl={publication.pdfUrl} title={publication.title} />
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}
