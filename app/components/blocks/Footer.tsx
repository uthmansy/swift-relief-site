import React from "react";
import { LOGO } from "@/app/constants/IMAGES";
import Link from "next/link";
import { menuItems } from "../Header/NavMenu";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

export const menuItemsTwo = [
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Donate", href: "/donate" },
];

export const socials = [
  { href: "http://x.com/swift_relief_f", icon: <TiSocialTwitter /> },
  {
    href: "https://www.instagram.com/swift_relief_foundation_",
    icon: <TiSocialInstagram />,
  },
  {
    href: "https://www.facebook.com/swiftrelieffoundation/",
    icon: <TiSocialFacebook />,
  },
];

function Footer() {
  return (
    <footer className="mt-auto w-full max-w-340 pt-20  px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <div>
            <img src={LOGO.src} alt="logo" className="w-28" />
          </div>
          <p className="mt-3 text-xs sm: text-gray-600">
            © 2026 Swift Relief Foundation.
          </p>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 ">
            {menuItems.map((item) => (
              <p key={item.href}>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 ">
            {menuItemsTwo.map((item) => (
              <p key={item.href}>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}

      <div className="py-5 mt-5 border-t border-neutral-500">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <div className="space-x-4 text-sm">
              <Link
                className="inline-flex gap-x-2 text-gray-900 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="inline-flex gap-x-2 text-gray-900 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                href="/privacy"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3">
            {/* Social Brands */}
            <div className="flex items-center space-x-4">
              {socials.map((item) => (
                <Link
                  key={item.href}
                  className="flex items-center justify-center h-10 w-10 border rounded-full"
                  href={item.href}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            {/* End Social Brands */}
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
