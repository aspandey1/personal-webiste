import AzureLogo from "../assets/msAzureLogo.svg";
import ReactLogo from "../assets/reactLogo.svg";
import PythonLogo from "../assets/pythonLogo.svg";
import JSLogo from "../assets/javaScriptLogo.svg";
import HTMLLogo from "../assets/htmlLogo.svg";
import ExpressLogo from "../assets/expressLogo.svg";
import CSSLogo from "../assets/cssLogo.svg";
import GitLogo from "../assets/gitLogo.svg";
import MongoLogo from "../assets/mongoLogo.svg";

export default function Resume() {
  return (
    <>
      <div className="px-9 pt-10">
        <div className="font-bold text-5xl">About</div>
        <div className="mt-1 w-[70px] h-[5px] bg-blue-500"></div>
        <div className="md:flex pt-10  w-full">
          <div className="md:w-[50%]">
            <div className="w-auto md:pr-10">
              <h1 className="text-4xl font-bold">Summary</h1>
              <p className="font-bold pt-4 text-xl">Ashish Pandey</p>
              <p className="italic pt-2 text-md">
                I am a Computer Science graduate with a passion for
                problem-solving and a track record of delivering practical
                solutions. My background in computer science has equipped me
                with the skills to tackle complex challenges and translate them
                into actionable solutions.
              </p>
              <ul className="pt-2 pl-3 list-disc">
                <li className="py-1 ml-5">ashish6pandey@gmail.com</li>
                <li className="py-1 ml-5">806-470-5404</li>
                <li className="py-1 ml-5">Lubbock, Texas</li>
              </ul>
            </div>
          </div>
          <div className="md:w-[50%] pt-10 md:pt-0">
            <div className="">
              <h1 className="text-4xl font-bold">Skills</h1>
              <div className="flex flex-wrap place-content-evenly">
                <img
                  src={AzureLogo}
                  alt="Microsoft Azure Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={ReactLogo}
                  alt="React Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={JSLogo}
                  alt="JavaScript Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={PythonLogo}
                  alt="Python Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={ExpressLogo}
                  alt="Express Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={MongoLogo}
                  alt="Mongo Database Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
                <img
                  src={CSSLogo}
                  alt="CSS Logo"
                  className="md:mr-6 mr-3 font-bold mt-4 text-xl w-[90px] h-[90px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
