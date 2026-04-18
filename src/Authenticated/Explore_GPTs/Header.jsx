import { GoGlobe } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";



function Header({ toggleSidebar, isSidebarOpen }) {



    return (
        <div className={`flex items-center justify-between p-2 transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-2'} `}>

          <GoGlobe onClick={toggleSidebar} className="text-2xl cursor-pointer" />
            <div className="flex flex-1 justify-end items-center gap-3">
                <button className=" flex gap-1 bg-gray-100 text-gray-300 rounded-full p-2 items-center">
                    <FiPlus className="text-lg" /> Create
                </button>

             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <IoIosPerson className="text-2xl" />       
                 </div> 

              
                   
            </div>
        </div>
    )
}

export default Header
