import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useCallback } from "react";
import useGlobalClick from "../hooks/useGlobalClick.js";
import { PiPencilSimpleLine } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { RxQuestionMarkCircled } from "react-icons/rx";
import Features from "../Guest/Start_Chat/Features.jsx";
import Setting from "../Guest/Start_Chat/Settings.jsx";
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const featuresRef = useRef(null);

  const navigate = useNavigate();
  function hadleHomePage() {
    navigate("/")
  }

  useGlobalClick(featuresRef, useCallback(() => setIsFeaturesOpen(false), []));



  //  state for the Unique ID
  const [activeMenuId, setActiveMenuId] = useState(null);

  //   toggle function
  const toggleMenu1 = (id) => {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
  };

  useGlobalClick(".menu-trigger", useCallback(() => setActiveMenuId(null), []));

  return (
    <div>

      <nav className="fixed h-10 z-50 bg-white top-0 left-0 w-full  flex items-center justify-between">
        {/* Left Section: Branding & Model Selector */}
        <div className="flex items-center scale-80 ">
          <button onClick={hadleHomePage} className="mr-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
            <PiPencilSimpleLine className="text-xl" />
          </button>


          <div className="relative inline-block" ref={featuresRef}>
            {/* Trigger Button */}
            <div
              className="flex items-center gap-1 cursor-pointer group px-2 py-1 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            >
              <span className="text-gray-800 text-lg">ChatGPT</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-gray-500 text-xs mt-1 group-hover:text-gray-600 transition-transform`}
              />
            </div>

            {isFeaturesOpen && (
              <div className="absolute scale-90 top-full left-0 mt-2 z-50">
                <Features />
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="translate-x-5 scale-80 flex items-center gap-3">

          <NavLink to="/Login">

            <Button variant="primary" className="h-10">
              Log in
            </Button>
          </NavLink>


          <NavLink to="/Login">

            <Button variant="secondary">Sign up</Button>
          </NavLink>

          {/* Header area */}
          <div className="relative menu-trigger self-end p-2">
            <button
              onClick={() => toggleMenu1("help-top")}
              className="p-2 text-black hover:opacity-100 transition-all"
            >
              <RxQuestionMarkCircled className="text-xl cursor-pointer" />
            </button>

            {/* pass side="down" so it opens normally */}
            {activeMenuId === "help-top" && <Setting side="down" />}
          </div>
        </div>
      </nav>
    </div>
  )
}
