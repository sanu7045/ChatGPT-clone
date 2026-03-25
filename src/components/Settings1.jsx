import Card from "./Card";
import { RxCross1 } from "react-icons/rx";
import { IoToggleSharp } from "react-icons/io5";

export default function Settings1({ onClose }) {

  
  return (
    <Card className="scale-85 bg-white rounded-4xl shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="p-8 w-2xl h-70">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl text-black">Settings</div>

          <div className="cursor-pointer p-2 hover:bg-gray-100 rounded-full" onClick={onClose}>
            <RxCross1 className="stroke-1 stroke-current text-xl" />
          </div>
        </div>

        <hr className="mt-8 text-gray-300" />

        <div className="flex justify-between items-center mt-8 h-30">
          <div className="font-bold text-2xl w-lg">
            <div className="font-semibold text-xl text-black">
              Improve the model for everyone
              <p className="text-sm mt-2 font-normal text-gray-400">
               Allow your content to be used to train our models, which makes
                ChatGPT better for you and everyone who uses it. We take steps
                to protect your privacy. <u>Learn more</u>
              </p>
            </div>
          </div>
          <div className="text-5xl w-15 p-1.5 text-black cursor-pointer">
            <IoToggleSharp />
          </div>
        </div>
      </div>
    </Card>
  );
}