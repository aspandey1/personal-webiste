import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import cityImage from "../assets/hero.jpg";
import { useRef } from "react";
import NavBar from "./Navbar";

import SummaryAndSkills from "./SummaryAndSkill";
import EduAndCert from "./EduAndCert";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

export default function Home() {
  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const portfolioRef = useRef<any>(null);

  const executeScroll = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <div
        ref={homeRef}
        className="h-[80vh] flex flex-col items-center justify-center w-fill bg-cover z-50 relative"
        style={{ backgroundImage: `url(${cityImage})` }}
      >
        <p className="md:font-extrabold font-bold text-center text-5xl md:text-7xl pb-[1rem]">
          Hi, I'm Ashish
        </p>
        <p className="text-2xl">A Software Developer</p>
        <div className="mt-[3rem]">
          <MdOutlineKeyboardDoubleArrowDown
            size={84}
            className=" text-black hover:cursor-pointer hover:translate-y-5 transition duration-1000 ease-out hover:text-white"
            onClick={executeScroll}
          />
        </div>
      </div>
      <div className="sticky top-0">
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
        />
      </div>
      <div
        ref={aboutRef}
        className="bg-gradient-to-t from-white to-slate-300 pt-[1.5rem] pb-10"
      >
        <SummaryAndSkills />
        <EduAndCert />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}
