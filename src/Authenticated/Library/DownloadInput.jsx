import Button from "../../components/Button"
import Input, { Input1 } from "../../components/Input"
import Card from "../../components/Card"
import { RiVoiceprintFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
import { FaStopCircle } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";


function DownloadInput() {


    return (
        <>
            <div className="flex justify-self-center bottom-5 fixed w-5xl">
                <div className=" w-full">

                    <Card className=" rounded-full shadow-lg items-self-center ">
                        <div className="flex justify-between items-center ">
                            <GoPlus className="text-2xl border rounded-full border-gray-300 cursor-pointer" />
                            <Input placeholder="Describe what you want to add, remove or re-edit" className="w-full text-lg items-center" />

                            <div className="flex gap-3 items-center scale-80">
                                <button className="flex justify-center items-center h-10 border cursor-pointer w-10 rounded-full transition-all hover:bg-gray-100" >
                                    <MdOutlineKeyboardVoice className="text-2xl" />
                                </button>
                                <button className="flex justify-center items-center cursor-pointer rounded-full" >
                                    <FaStopCircle className="text-4xl text-black" />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default DownloadInput;