import Card from "./Card";
import { VscSettings } from "react-icons/vsc";
import { PiKeyboard } from "react-icons/pi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiPuzzlePiece } from "react-icons/pi";
import Settings1 from "./Settings1";
import KeyboardShorcuts from "./KeyboardShorcuts";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Setting({ side }) {
  //  State tracks which string ID is active
  const [activeModal, setActiveModal] = useState(null);

  const positionClass = side === "up" ? "bottom-full -mb-4" : "top-10 mt-2";

  return (
    <>
      {/* Small Settings Menu */}
      <Card className={`scale-90 w-xs absolute mt-5 right-2 ${positionClass} bg-white border border-gray-200 rounded-3xl shadow-lg z-50 p-2 animate-in fade-in zoom-in duration-200`}>
        
        {/* SETTINGS BUTTON */}
        <div 
          className="flex font-medium gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md"
          onClick={() => setActiveModal('settings')} 
        >
          <VscSettings className="text-xl m-1" />
          <span className="justify-self-center text-black">Settings</span>
        </div>

        {/* KEYBOARD SHORTCUTS BUTTON */}
        <div 
          className="flex font-medium gap-2 mt-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md"
          onClick={() => setActiveModal('shortcuts')} 
        >
          <PiKeyboard className="text-xl m-1" />
          <span className="text-black">Keyboard shortcuts</span>
        </div>

        <hr className="text-gray-300 mt-4" />
        <div className="flex font-medium gap-2 mt-4">
          <FaArrowUpRightFromSquare className="text-sm m-1" />
          <span className="justify-self-center text-black">Help & FAQ</span>
        </div>
        <div className="flex font-medium gap-2 mt-4">
          <FaArrowUpRightFromSquare className="text-sm m-1" />
          <span className="justify-self-center text-black">Release notes</span>
        </div>
        <div className="flex font-medium gap-2 mt-4">
          <FaArrowUpRightFromSquare className="text-sm m-1" />
          <span className="justify-self-center text-black">Terms and policies</span>
        </div>
        <div className="flex font-medium gap-2 mt-4">
          <PiPuzzlePiece className="text-lg m-1 stroke-9" />
          <span className="justify-self-center text-black">Get ChatGPT search extension</span>
        </div>
      </Card>

      {/* Render Large Modal - Using Portal for centering */}
      {activeModal && createPortal(
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-100">
          <div className="scale-90 relative">
            {activeModal === 'settings' && (
              <Settings1 onClose={() => setActiveModal(null)} />
            )}

            {activeModal === 'shortcuts' && (
              <KeyboardShorcuts onClose={() => setActiveModal(null)} />
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}