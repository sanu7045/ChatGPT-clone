import { BsOpenai } from "react-icons/bs";
import { TbLayoutSidebar } from "react-icons/tb";
import { PiPencilSimpleLine, PiStarFourLight, PiCirclesFour } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState, useRef, useCallback } from "react";
import useGlobalClick from "../../hooks/useGlobalClick";
import useChatHistory from "../../hooks/useChatHistory";
import { MdWindow } from "react-icons/md";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function SearchChats({ toggleSidebar, isSidebarOpen, setCurrentView }) {
    const chatHistory = useChatHistory();

    const [openSearch, setOpenSearch] = useState(false);
    const searchRef = useRef(null);
    useGlobalClick(searchRef, useCallback(() => setOpenSearch(false), []));

    const handleLibraryClick = () => {
        if (setCurrentView) setCurrentView("library");
    };

    const navigate = useNavigate()
    function homePage() {
        navigate("/")
        if (setCurrentView) setCurrentView("search");
    }

    return (
        <>
            <div className="w-70 bg-gray-100 h-screen fixed ">
                <div>
                    <div className="flex justify-between text-2xl items-center px-4 pt-4 ">
                        <BsOpenai className="text-2xl" />
                        <TbLayoutSidebar
                            onClick={toggleSidebar}
                            className={`text-2xl cursor-pointer transition-opacity ${isSidebarOpen ? 'opacity-80 text-gray-600' : 'opacity-90 text-black'} hover:opacity-100`}
                        />
                    </div>
                    <div className="flex flex-col  text-xl gap-1 cursor-pointer mt-3 m-2">
                        <div onClick={homePage} className="flex  text-gray-800 gap-4 hover:bg-gray-300 rounded-2xl h-10 items-center p-2.5 -mb-3">
                            <PiPencilSimpleLine /><p className="font-normal text-base">New chat</p>
                        </div>

                        <div onClick={() => { setOpenSearch(true)}} className="group flex text-gray-800 gap-4 hover:bg-gray-300 rounded-2xl h-10 items-center p-2.5 -mb-3 cursor-pointer">

                            <IoSearchOutline />
                            <p className="font-normal text-base flex-1">Search chats</p>

                            <div className="mr-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <MdWindow className="text-xl" />
                                <span className="text-sm flex items-center font-medium rounded-md text-gray-800">K</span>
                            </div>
                        </div>
                        {openSearch && (<div ref={searchRef} className="absolute -top-15"><Search onClose={() => setOpenSearch(false)} setCurrentView={setCurrentView} /></div>)}

                        <div onClick={handleLibraryClick} className="group flex text-gray-800 gap-4 hover:bg-gray-300 rounded-2xl h-10 items-center p-2.5 -mb-3 cursor-pointer">
                            <MdOutlinePhotoLibrary /><p className="font-normal text-base">Library</p>
                        </div>

                        <div className="flex mt-2 text-gray-800 gap-4 hover:bg-gray-300 rounded-2xl h-10 items-center p-2.5 -mb-3">
                            <AiOutlinePlayCircle /> <p className="font-normal text-base">Sora</p>
                        </div>
                        <div className="flex  text-gray-800 gap-4 hover:bg-gray-300 rounded-2xl h-10 items-center p-2.5 -mb-4">
                            <PiCirclesFour /> <p className="font-normal text-base">GPTs</p>
                        </div>
                        <div className="flex  text-gray-800 gap-4  my-3 h-10 items-center p-3 -mb-4">
                            <p className="font-semibold text-base">Content</p>
                        </div>
                        <div className="flex text-gray-800 gap-4 hover:bg-gray-300  my-3 h-10 items-center p-3 -mb-2">
                            <div className="-translate-x-10">
                                <img src="/src/assets/images.jpg" className="scale-30 object-cover rounded-full h-30 w-30" alt="" />
                            </div><p className="font-normal text-base -translate-x-22">Canva</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 ml-3 mt-5">chats</p>
                        <div className="flex-1 overflow-y-auto no-scrollbar max-h-[calc(130vh-450px)] pb-[30vh]  ">
                            <div className="flex flex-col ">
                                {chatHistory.map((sentence, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-between rounded-2xl hover:bg-gray-200 cursor-pointer transition-colors"
                                    >
                                        <p className="text-sm ml-1 font-normal text-gray-700  p-2">
                                            {sentence}
                                        </p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-gray-400">...</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed -bottom-3  h-15 bg-gray-100">
                    <hr className="text-gray-400 w-70" />
                    <div className="flex items-center mx-6 my-5 gap-5 -translate-y-4">

                        <PiStarFourLight className="scale-180 " /><p className="font-medium text-sm text-black">Upgrade plan <br /> <span className="font-normal text-sm text-gray-600">More access to the best models</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchChats