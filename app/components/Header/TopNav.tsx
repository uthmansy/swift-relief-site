import React from "react";
import Container from "../Container";
import NavMenu from "./NavMenu";
import ButtonLink from "../ButtonLink";
import { LOGO } from "@/app/constants/IMAGES";

interface Props {
  type?: "page" | "home";
}

function TopNav({ type = "home" }: Props) {
  return (
    <div className="z-50 relative bg-white text-black">
      <Container>
        <div className="flex justify-between py-3 items-center">
          <div className="flex items-center">
            <div
              className={`${type === "home" ? "bg-green-700" : "bg-white"} p-2`}
            >
              <img src={LOGO.src} alt="logo" className="w-16" />
            </div>
            <NavMenu />
          </div>
          <div className="hidden md:block">
            <ButtonLink type="red" href="/contact">
              Donate
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopNav;
