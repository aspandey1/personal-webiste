import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  interface Links {
    name: string;
    link: string;
  }

  const navLinks: Links[] = [
    { name: "HOME", link: "#home" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CERTIFICATES", link: "#certifications" },
    { name: "EDUCATION", link: "#education" },
  ];

  const [navOpen, setNavOpen] = useState<Boolean>(false);

  return (
    <>
      <div className="shadow-md w-full">
        <div className="md:flex justify-between bg-blue-600 py-4 md:px-10 px-7">
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
            className={`md:flex md:items-center md:pb-0 pb-2 bg-red-400 absolute md:static md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-200 ease-in ${
              navOpen
                ? "top-[86vh] opacity-100"
                : "top-[60vh] md:opacity-100 opacity-0"
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
