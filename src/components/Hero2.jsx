import Button from "./Button"
import Input, { Input1 } from "./Input"
import Card from "./Card"
import { RiVoiceprintFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineKeyboardVoice } from "react-icons/md";

function Hero2({ isSidebarOpen }) {
    return (
        <>
            <div className={`flex justify-center items-center h-screen  transition-all duration-300 ${isSidebarOpen ? 'pl-80' : 'pl-0'}`}>
                <div className="w-full mt-15 max-w-4xl ">
                    <p className="text-2xl font-medium -translate-y-10 text-center">How can I help you today?</p>
                    <Card className="-translate-y-10 scale-70 rounded-4xl shadow-lg">
                        <Input placeholder="Ask anything..." className="w-full text-lg" />
                        
                        <div className="flex justify-between items-center mt-4 px-2">
                           
                            <div className="flex gap-4 items-center">
                                <Button className="flex  gap-2 items-center hover:bg-gray-100 p-2 rounded-xl transition-all">
                                    <GoPlus className="text-2xl" />
                                </Button>
                                <Button className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-xl transition-all">
                                    <VscSettings className="text-2xl" /> 
                                    <span className="text-base font-normal">Tools</span>
                                </Button>
                            </div>

                           
                            <div className="flex gap-3 items-center">
                                <button className="flex justify-center items-center h-10 border cursor-pointer w-10 rounded-full transition-all hover:bg-gray-100" >
                                    <MdOutlineKeyboardVoice className="text-2xl" /> 
                                </button>
                                <button className="flex justify-center bg-black text-white items-center cursor-pointer  h-10 w-10 rounded-full transition-all" >
                                    <RiVoiceprintFill className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Hero2;