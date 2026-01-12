"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INTRO_1 } from "@/app/constants/IMAGES";

interface Item {
  title: string;
  description: string;
}

const items: Item[] = [
  {
    title: "Core Impact – Specialised Psychosocial Support",
    description:
      "Delivered essential psychosocial support to almost 10,000 at-risk children in Chad, Niger, and Nigeria, with focused interventions for 5,000 displaced children in hard to reach areas.",
  },
  {
    title: "Innovative Methodology",
    description:
      "Regional coordinator of the IAM Project, utilizing art-based and indigenous expressive treatments for trauma rehabilitation.",
  },
  {
    title: "Integrated Programming",
    description:
      "Incorporates mental therapy across all facets of our initiatives—Youth & Women’s Empowerment and Education & Advocacy—guaranteeing that healing translates into concrete opportunities and social reintegration.",
  },
];

function Mission() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".mission",
      { opacity: 0, x: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        x: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".mission",
          start: "top 70%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="max-w-full overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 z-0">
          <img
            data-scroll
            data-scroll-speed={-0.5}
            src={INTRO_1.src}
            alt=""
            className="w-full h-full object-cover blur-2xl"
          />
        </div>
        <div className="bg-green-700 md:w-2/3 text-white py-24 md:py-28 px-5 md:pl-0 md:px-10 z-30 relative">
          {/* <div className="px-16 mb-20 max-w-3xl">
            <h3 className="font-bold uppercase mb-5">
              Core Impact – Specialised Psychosocial Support:
            </h3>
            <p>
              Delivered essential psychosocial support to almost 10,000 at-risk
              children in Chad, Niger, and Nigeria, with focused interventions
              for 5,000 displaced children in inaccessible regions of Borno
              State (Dikwa, Ngala, Marte, Kala Balge).
            </p>
          </div> */}
          <div className="max-w-screen-md flex flex-col space-y-14">
            {items.map((item, index) => (
              <div
                key={index}
                className="mission flex items-start space-x-10 md:-ml-7"
              >
                <span className="flex items-center justify-center border rounded-full h-14 w-14 bg-white text-green-800 ">
                  {index + 1}
                </span>
                <div className="flex flex-1 flex-col space-y-4">
                  <h3 className="font-medium uppercase text-2xl">
                    {item.title}
                  </h3>
                  <p className="opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
