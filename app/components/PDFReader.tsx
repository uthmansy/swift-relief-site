"use client";

import { useState } from "react";
import Container from "./Container";

interface Props {
  pdfUrl: string;
  title: string;
}

function PDFReader({ pdfUrl, title }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <section className="py-10">
      <Container>
        {loading && (
          <div className="w-full h-96 bg-neutral-200 flex items-center justify-center">
            <div>
              <div className="border-b border-green-700 rounded-full w-6 h-6 animate-spin mx-auto mb-6"></div>
              <span>Loading PDF, this might take some time...</span>
            </div>
          </div>
        )}
        <iframe
          src={pdfUrl}
          className="flex-1 w-full h-180"
          title={title}
          onLoad={() => setLoading(false)}
        />
      </Container>
    </section>
  );
}

export default PDFReader;
