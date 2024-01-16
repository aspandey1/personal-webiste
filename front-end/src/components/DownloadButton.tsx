import { FaFileDownload } from "react-icons/fa";

interface buttonDetails {
  title: string;
}

const DownloadButton: React.FC<buttonDetails> = (props: buttonDetails) => {
  return (
    <>
      <a
        href="https://resumedownload.azurewebsites.net/api/httpTrigger-download-resume?"
        className="flex items-center bg-blue-500 md:text-2xl text-xl font-bold p-5 rounded-lg justify-center w-[100%] shadow-xl hover:scale-[1.05] ease-in-out duration-300 delay-150"
      >
        <FaFileDownload size={30} />
        <div className="pl-4">{props.title}</div>
      </a>
    </>
  );
};

export default DownloadButton;
