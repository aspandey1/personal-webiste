import { FaExternalLinkAlt } from "react-icons/fa";
import Resume from "../assets/Ashish_Pandey_Resume.pdf";

interface buttonDetails {
  title: string;
}

const Button: React.FC<buttonDetails> = (props: buttonDetails) => {
  return (
    <>
      <button className="flex w-[100%] bg-zinc-800 md:text-2xl text-xl font-bold p-5 rounded-lg justify-center">
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <FaExternalLinkAlt color="lightgray" />
          <div className="pl-4 text-gray-300">{props.title}</div>
        </a>
      </button>
    </>
  );
};

export default Button;
