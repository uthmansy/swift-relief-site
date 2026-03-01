"use client";
import React, { useLayoutEffect, useRef } from "react";
import ButtonLink from "../ButtonLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INTRO_1, LEAF } from "@/app/constants/IMAGES";

function Intro() {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imgRef.current,
      { width: "0%" }, // Start with the image completely hidden (width = 0)
      {
        width: "100%", // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 40%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-wrap overflow-hidden">
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
        <img
          ref={imgRef}
          src={INTRO_1.src}
          alt=""
          className="w-full object-cover h-[120%]"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 py-24 md:py-40 px-5 md:pl-24 relative">
        <div
          ref={contentRef}
          className="flex flex-col space-y-5 md:space-y-7 max-w-screen-sm"
        >
          <span className="uppercase text-red-600 font-medium">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-green-800">
            Youth empowerment, MHPSS, trauma-informed care
          </h2>
          {/* <h3 className="italic">Empowering Agriculture, Transforming Lives</h3> */}
          <p>
            A frontline humanitarian organisation with over a decade of
            experience specialising in trauma-informed care and community-based
            resilience across the Lake Chad Basin.
          </p>
          <p>
            SRF has been intervening on MHPSS to the children of IDPs on their
            arrivals to the IDP camps SRF has also intervened on Nigerian
            refugees who were in Cameroon before and returned to Muna On MHPSS
            and Protection
          </p>
          <ButtonLink type="red" href="/about">
            Find Out More..
          </ButtonLink>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src={LEAF.src}
            alt=""
            className="w-56 md:w-96 max-w-xl opacity-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
