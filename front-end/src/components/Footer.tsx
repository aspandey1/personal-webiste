// Add Github, YouTube, and Demo buttons
// Download Resume

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer bg-zinc-800 text-white">
      <div className="md:flex md:justify-between px-10 py-8">
        <div className="flex md:items-center justify-center md:mb-0 mb-8">
          <div className="text-sm md:text-lg">Developed by Ashish Pandey</div>
        </div>
        <div className="flex justify-center gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aspandey1"
            className="md:ml-10 md:text-6xl text-4xl"
          >
            <BsGithub className="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ashishpandey-"
            className="md:ml-10 md:text-6xl text-4xl"
          >
            <BsLinkedin className="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
