import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { PiCopyLight } from "react-icons/pi";

export default function PromptHeader({ sentence, className, showCopy = true }) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = () => {
    copy(sentence);
  };
  return (
    <>
      <div className={` flex justify-end items-center ${className || "mt-10 mb-4"}`}>
        <div className="text-black text-lg font-normal bg-gray-100 px-6 py-3 rounded-3xl  wrap-break-word">
          {sentence}
        </div>
      </div>
      {showCopy && (
        <div className="justify-end flex">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm transition-all duration-500 text-black hover:opacity-100"
          >
            <PiCopyLight className="text-xl" />
            {copied ? <span>copied</span> : <span></span>}
          </button>
        </div>
      )}
    </>
  );
}
