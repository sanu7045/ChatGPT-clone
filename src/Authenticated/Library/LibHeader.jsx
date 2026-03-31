import Button from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { TbLayoutSidebar } from "react-icons/tb";

function LibHeader({ toggleSidebar, isSidebarOpen }) {
    return (
        <>
            <div className={` flex justify-between m-2 transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>               
                <div className="flex items-center gap-4">
                    {!isSidebarOpen && (
                        <TbLayoutSidebar
                            onClick={toggleSidebar}
                            className="text-2xl cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                        />
                    )}
                    <p className="text-lg font-semibold">
                        Library
                    </p>
                </div>
                <div className="flex items-center gap-3 ">
                    <Button variant="secondary" className="scale-90 flex w-40 gap-4">
                        <FiPlus className="text-lg" /> Create image
                    </Button>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <IoIosPerson className="text-2xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibHeader