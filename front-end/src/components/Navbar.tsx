export default function NavBar() {
  return (
    <>
      <header className="md:block hidden bg-blue-500 py-6 flex items-center flex-col">
        <ul className="flex flex-row pt-5">
          <li className="w-[8.5rem] w-full mx-2 bg-red-100 text-lg rounded-lg text-center">
            <a href="#about" className="block px-4 py-2 font-semibold">
              Home
            </a>
          </li>
          <li className="w-[8.5rem] mx-2 bg-red-100 text-lg rounded-lg text-center">
            <a href="#projects" className="block px-4 py-2 font-semibold">
              Projects
            </a>
          </li>
          <li className="w-[8.5rem] mx-2  bg-red-100 text-lg rounded-lg text-center">
            <a href="#education" className="block px-4 py-2 font-semibold">
              Education
            </a>
          </li>
          <li className="w-[8.5rem] mx-2  bg-red-100 text-lg rounded-lg text-center">
            <a href="#certificates" className="block px-4 py-2 font-semibold">
              Certificates
            </a>
          </li>
          <li className="w-[8.5rem] mx-2  bg-red-100 text-lg rounded-lg text-center">
            <a href="#contact" className="block px-4 py-2 font-semibold">
              Contact Me
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
