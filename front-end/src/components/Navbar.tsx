import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const openMenu: string =
  "md:static absolute bg-red-500 md:min-h-fit min-h-[60vh] left-0 top-[108px] md:w-auto w-full flex items-center px-5";
const closeMenu: string =
  "md:static absolute bg-blue-500 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5";

export default function NavBar() {
  const [menuStatusOn, setMenuStatusOn] = useState<Boolean>(false);
  const [mobileLinkStyle, setMobileLinkStyle] = useState<string>(closeMenu);
  const open = () => {
    setMenuStatusOn(false);
    setMobileLinkStyle(closeMenu);
  };
  const close = () => {
    setMenuStatusOn(true);
    setMobileLinkStyle(openMenu);
  };
  return (
    <>
      <header className="bg-blue-500 py-4">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="">
            <h1 className="py-2 px-2 text-6xl">AP</h1>
          </div>
          <div className={mobileLinkStyle}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-[3rem]">
              <li>
                <a className="hover:text-gray-300" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="#">
                  Certifications
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="#">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-black text-gray-400 font-bold w-[150px] px-2 py-4 rounded-lg hover:bg-slate-500 hover:text-black">
              Download Resume
            </button>
            {menuStatusOn ? (
              <IoClose
                className="md:hidden text-4xl cursor-pointer"
                onClick={open}
              ></IoClose>
            ) : (
              <IoMenu
                className="md:hidden text-4xl cursor-pointer"
                onClick={close}
              ></IoMenu>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
