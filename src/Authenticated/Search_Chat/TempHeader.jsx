import { PiPencilSimpleLine, PiStarFourFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import Button from "../../components/Button";
import { useState, useRef, useCallback } from "react";
import Upgrade from "../../components/Upgrade";
import useGlobalClick from "../../hooks/useGlobalClick";



function TempHeader({ toggleSidebar, isSidebarOpen }) {
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
    const dropdownRef = useRef(null);

    function toggleUpgrade() {
        setIsUpgradeOpen(!isUpgradeOpen)
    }

    useGlobalClick(dropdownRef, useCallback(() => setIsUpgradeOpen(false), []));

    return (
        <>
            <div className={`relative z-20 flex justify-between items-center transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                <div className=" scale-70 flex items-center gap-5">
                    {!isSidebarOpen && (
                        <PiPencilSimpleLine
                            onClick={toggleSidebar}
                            className="text-2xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity"
                        />
                    )}
                    <button className="relative" ref={dropdownRef}>
                        <p onClick={toggleUpgrade} className="hover:bg-gray-100  text-xl cursor-pointer  rounded-xl p-2 flex items-center gap-2">
                            ChatGPT
                            <FontAwesomeIcon icon={faChevronDown} className="opacity-70 text-sm" />
                        </p>
                        {isUpgradeOpen && (
                            <div className="absolute top-full left-0 mt-2 z-50">
                                <Upgrade />
                            </div>
                        )}
                    </button>
                </div>
                <Button variant="secondary" className="w-40 h-15 scale-60 flex text-2xl rounded-full gap-2 bg-blue-100 text-blue-600 justify-between items-center">
                    <PiStarFourFill className="text-2xl" /> <p className=" ">Get Plus</p>
                </Button>
                <div className="scale-70 flex items-center gap-5">
                    <Button variant="secondary" className="h-10 w-40 gap-5">
                        <span className="flex gap-2 items-center "><IoTimeOutline className="text-xl" /><p className="text-lg font-normal">Temporary</p></span>
                    </Button>
                    <button className="scale-110 rounded-full cursor-pointer"><IoIosPerson className="text-4xl bg-blue-100 rounded-full" /></button>
                </div>
            </div>
        </>
    )
}

export default TempHeader
