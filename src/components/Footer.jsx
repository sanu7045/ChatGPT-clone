import { useState, useEffect } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import Setting from "./Settings";

export default function Footer({ showMessage = true }) {

  const [activeMenuId, setActiveMenuId] = useState(null);


  const toggleMenu1 = (id) => {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
  };

  // Global click listener to close menu when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is not on a menu-trigger, close the active menu
      if (!event.target.closest(".menu-trigger")) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 w-screen z-50">
        <div className="relative menu-trigger justify-self-end scale-85 right-5  ">
          <button
            onClick={() => toggleMenu1("help-bottom")}
            className="p-1 text-black hover:opacity-100 mb-2"
          >
            <RxQuestionMarkCircled className="text-xl cursor-pointer" />
          </button>

          {/* pass side="up" to trigger */}
          {activeMenuId === "help-bottom" && <Setting side="up" />}
        </div>

        {showMessage && (<div className="justify-center items-center flex scale-85 ">
          <p className="text-sm text-gray-700 [word-spacing:2px]">
            By messaging ChatGPT, you agree to our <u>Terms</u> and &thinsp;
            <u>Privacy Policy.</u>
          </p>
        </div>)}
      </div>
    </>
  );
}
