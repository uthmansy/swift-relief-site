import Container from "@/app/components/Container";
import TopNav from "@/app/components/Header/TopNav";
import Footer from "@/app/components/blocks/Footer";
import { news } from "@/app/lib/news";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function page({ params }: Props) {
  const { slug } = await params; // ✅ unwrap params

  const single = news.find((p) => p.slug === slug);

  if (!single) return notFound();
  return (
    <div>
      <TopNav />
      <section className="py-10">
        <Container>{single.content}</Container>
      </section>
      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}
