"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../components/Container";
import TopNav from "../components/Header/TopNav";
import Footer from "../components/blocks/Footer";
import {
  GALLERY_IMG_1,
  GALLERY_IMG_2,
  GALLERY_IMG_3,
  GALLERY_IMG_4,
  GALLERY_IMG_5,
  GALLERY_IMG_6,
  GALLERY_IMG_7,
  GALLERY_IMG_8,
  GALLERY_IMG_9,
} from "@/app/constants/IMAGES";

const images = [
  { src: GALLERY_IMG_1.src, alt: "Community engagement" },
  { src: GALLERY_IMG_2.src, alt: "Field work" },
  { src: GALLERY_IMG_3.src, alt: "Youth empowerment" },
  { src: GALLERY_IMG_4.src, alt: "Resource distribution" },
  { src: GALLERY_IMG_5.src, alt: "Sustainability projects" },
  { src: GALLERY_IMG_6.src, alt: "Community workshop" },
  { src: GALLERY_IMG_7.src, alt: "Policy work" },
  { src: GALLERY_IMG_8.src, alt: "Planning" },
  { src: GALLERY_IMG_9.src, alt: "Review" },
];

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Prevent background scroll
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  return (
    <div className="bg-white">
      <TopNav />

      <section className="py-16">
        <Container>
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Gallery
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Visual highlights of our field-based programmes and community
              engagement.
            </p>
          </header>

          {/* Modern Responsive Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="relative h-64 cursor-pointer overflow-hidden rounded-2xl group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

          {/* Image */}
          <div className="relative w-[90vw] max-w-5xl h-[80vh]">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 text-white text-sm opacity-80">
            {images[selectedIndex].alt} ({selectedIndex + 1} / {images.length})
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GalleryPage;
