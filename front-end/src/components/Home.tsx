import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import cityImage from "../assets/hero.jpg";

export default function Home() {
  return (
    <>
      <div
        className="h-[80vh] flex flex-col items-center justify-center w-fill bg-cover z-50 relative"
        style={{ backgroundImage: `url(${cityImage})` }}
      >
        <p className="md:font-extrabold font-bold text-center text-5xl md:text-7xl pb-[1rem]">
          Hi, I'm Ashish
        </p>
        <p className="text-2xl">A Software Developer</p>
        <MdOutlineKeyboardDoubleArrowDown
          size={54}
          color={"white"}
          className="mt-[3rem]"
        />
      </div>
    </>
  );
}
