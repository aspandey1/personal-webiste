import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  interface Links {
    name: string;
    link: string;
  }

  const navLinks: Links[] = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#resume" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  const [navOpen, setNavOpen] = useState<Boolean>(false);

  return (
    <>
      <div className="shadow-md bg-slate-300 w-full z-50">
        <div className="md:flex justify-between py-4 md:px-10 px-7">
          <div className="font-bold text-2xl flex items-center">
            Ashish Pandey
            {navOpen ? (
              <IoClose
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="md:hidden absolute right-8 cursor-pointer"
              />
            ) : (
              <IoMenu
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="md:hidden absolute right-8 cursor-pointer"
              />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 bg-slate-300 pb-2 absolute md:static md:z-auto  right-0 w-full md:w-auto md:pl-0 pl-7 ${
              navOpen
                ? "top-[86.5vh] opacity-100 z-30 transition-all duration-300 ease-in"
                : "top-[40vh] md:opacity-100 opacity-0 z-[-1] transition-all duration-500 ease-out"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7 text-lg">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
