import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import Resume from "../assets/Ashish_Pandey_Resume.pdf";

interface buttonDetails {
  title: string;
  color: string;
  icon: string;
  textColor: string;
  iconColor: string;
  link?: string;
}

const Button: React.FC<buttonDetails> = (props: buttonDetails) => {
  return (
    <>
      <a
        href={props.link ? props.link : Resume}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center flex w-[100%] ${props.color} md:text-2xl text-xl font-bold p-5 rounded-lg justify-center shadow-xl hover:scale-[1.05] ease-in-out duration-300`}
      >
        {(() => {
          switch (props.icon) {
            case "github":
              return <BsGithub color={props.iconColor} />;
            case "externalLink":
              return <FaExternalLinkAlt color={props.iconColor} />;
            case "youtube":
              return <FaYoutube color={props.iconColor} size={28} />;
            default:
              return null;
          }
        })()}

        <div className={`pl-4 ${props.textColor} text-center`}>
          {props.title}
        </div>
      </a>
    </>
  );
};

export default Button;
