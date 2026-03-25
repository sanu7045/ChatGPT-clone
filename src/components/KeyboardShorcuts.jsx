import Card from "./Card";
import Button from "/src/components/Button.jsx";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

export default function KeyboardShorcuts({ onClose }) {
  return (
    <Card className="scale-85 p-7 rounded-4xl w-4xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="flex justify-between items-center">
        <div className="font-medium text-2xl text-black">
          Keyboard shortcuts
        </div>

        <div className="cursor-pointer p-2 hover:bg-gray-100 rounded-full" onClick={onClose}>
          <RxCross1 className="stroke-1 stroke-current" />
        </div>
      </div>

      <hr className="mt-8 text-gray-300" />

     <div className="flex justify-between items-center w-210 ">
          <div className=" max-w-100">
            {/* Row 1 */}
            <div className="flex items-center justify-between mt-8 ">
              <span className="font-medium text-lg text-black">
                Open new chat
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-lg  w-12"
                >
                  O
                </Button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between mt-5">
              <span className="font-medium text-lg text-black">
                Focus chat input
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button variant="secondary1" className="p-4 text-lg">
                  ESC
                </Button>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between mt-5 w-100">
              <span className="font-medium text-lg text-black">
                Copy last code block
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-2xl font-medium w-12"
                >
                  ;
                </Button>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between mt-5">
              <span className="font-medium text-lg text-black">
                Copy last response
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-lg  w-12"
                >
                  C
                </Button>
              </div>
            </div>
          </div>
          <div className=" max-w-110">
            {/* Row 1 */}
            <div className="flex items-center justify-between mt-8 w-100">
              <span className="font-medium text-lg text-black">
                Set custom instructions
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-lg  w-12"
                >
                  I
                </Button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between mt-5">
              <span className="font-medium text-lg text-black">
                Toggle sidebar
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button variant="secondary1" className="p-4 text-lg w-12">
                  S
                </Button>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between mt-5">
              <span className="font-medium text-lg text-black">
                Delete chat
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-2xl font-medium w-12"
                >
                  <FaDeleteLeft />
                </Button>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between mt-5">
              <span className="font-medium text-lg text-black">
                Show shortcuts
              </span>
              <div className="flex space-x-3">
                <Button variant="secondary1" className="p-4">
                  <MdOutlineKeyboardCommandKey className="text-2xl h-8 w-10" />
                </Button>
                <Button variant="secondary1" className="p-4">
                  Shift
                </Button>
                <Button
                  variant="secondary1"
                  className="p-4 text-lg  w-12"
                >
                  /
                </Button>
              </div>
            </div>
          </div>
        </div>
    </Card>
  );
}


