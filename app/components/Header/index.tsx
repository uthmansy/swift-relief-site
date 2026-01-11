import TopNav from "./TopNav";
import Hero from "./Hero";
import { HERO_2 } from "@/app/constants/IMAGES";

const Header = () => {
  return (
    <header className="relative md:h-screen w-full overflow-hidden text-white">
      <div>
        <img
          src={HERO_2.src}
          alt="hero image"
          className={`absolute top-0 left-0 right-0 -bottom-10 w-full h-full object-cover transition-opacity duration-500 blur-xl`}
        />

        <div className="bg-black/30 backdrop-blur-md w-full max-w-5xl h-full absolute left-0 top-0 bottom-0"></div>
      </div>
      <TopNav />
      <Hero />
    </header>
  );
};

export default Header;
