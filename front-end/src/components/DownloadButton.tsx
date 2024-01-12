import { FaFileDownload } from "react-icons/fa";

interface buttonDetails {
  title: string;
}

const Button: React.FC<buttonDetails> = (props: buttonDetails) => {
  return (
    <>
      <button className="flex bg-blue-400 md:text-2xl text-xl font-bold p-5 rounded-lg justify-center w-[100%]">
        <a href="" className="flex items-center">
          <FaFileDownload size={30} />
          <div className="pl-4 ">{props.title}</div>
        </a>
      </button>
    </>
  );
};

export default Button;
