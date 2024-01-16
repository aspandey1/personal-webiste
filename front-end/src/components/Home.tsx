import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import cityImage from "../assets/hero.jpg";
import { useRef } from "react";
import NavBar from "./Navbar";

import SummaryAndSkills from "./SummaryAndSkill";
import EduAndCert from "./EduAndCert";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ViewButton from "./ViewButton";
import DownloadButton from "./DownloadButton";

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
        <div className="absolute bottom-0 text-gray-400 text-sm">
          Photo by{" "}
          <a href="https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Paul Pastourmatzis{" "}
          </a>
          on{" "}
          <a href="https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
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
      <div className="md:flex pb-10 md:px-[5rem] px-4 gap-10">
        <div className="md:w-[50%] pb-2">
          <ViewButton
            title="View Resume"
            color="bg-zinc-800"
            icon="externalLink"
            iconColor="lightgrey"
            textColor="text-gray-300"
          />
        </div>
        <div className="md:w-[50%]">
          <DownloadButton title="Download Resume" />
        </div>
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}
