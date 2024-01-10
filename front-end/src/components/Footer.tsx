import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer bg-slate-800 text-white">
      <div className="flex justify-between px-10 py-8">
        <div className="flex items-center">
          <div>Developed by Ashish Pandey</div>
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aspandey1"
            className="ml-10"
          >
            <BsGithub size={60} className="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ashishpandey-"
            className="ml-10"
          >
            <BsLinkedin size={60} className="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
