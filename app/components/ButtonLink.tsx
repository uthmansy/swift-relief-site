import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: Url;
  type?: "primary" | "white" | "red";
}

function ButtonLink({ children, href, type = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={`${
        type === "primary"
          ? "bg-green-700 text-white"
          : type === "red"
          ? "bg-red-500 text-white"
          : "bg-white text-green-900"
      }  px-6 md:px-10 py-3 md:py-5  uppercase text-sm max-w-fit font-medium`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
