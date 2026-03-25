import { PiPencilSimpleLine, PiStarFourFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import Button from "./Button";

function TempNavbar({toggleSidebar, isSidebarOpen   }) {
    return (
        <>
            <nav className={`  relative z-20 flex justify-between items-center transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                <div className="scale-70 flex items-center gap-5">
                    {!isSidebarOpen && (
                        <PiPencilSimpleLine 
                            onClick={toggleSidebar} 
                            className="text-2xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity" 
                        />
                    )}
                    <p className="text-xl cursor-pointer hover:bg-gray-100 rounded-3xl px-2 flex items-center gap-2">
                        ChatGPT
                        <FontAwesomeIcon icon={faChevronDown} className="opacity-70 text-sm" />
                    </p>
                </div>
                <div className="scale-60 flex text-2xl rounded-full p-2 gap-2 bg-blue-100 text-blue-600 justify-between items-center">
                    <PiStarFourFill className="text-2xl" /> <p className="pr-2">Get Plus</p>
                </div>
                <div className="scale-70 flex items-center gap-5">
                    <Button variant="secondary" className="h-10 w-40 gap-5">
                        <span className="flex gap-2 items-center "><IoTimeOutline className="text-xl" /><p className="text-lg font-normal">Temporary</p></span>
                    </Button>
                    <IoIosPerson className="text-4xl bg-blue-100 rounded-full" />
                </div>
            </nav>
        </>
    )
}

export default TempNavbar
