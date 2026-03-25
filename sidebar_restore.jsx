import { SlNotebook } from "react-icons/sl";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { faPaperclip, faGlobe, faArrowUp, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { TiDocumentText } from "react-icons/ti";


function SideBar({ toggleSidebar }) {
    return (
        <>
            <div className="bg-gray-100 h-screen w-110 z-100">
                <div className="flex gap-10 text-2xl p-5">
                    <SlNotebook />
                    <button onClick={toggleSidebar}>
                        <PiPencilSimpleLineLight className="text-3xl cursor-pointer" />
                    </button>
                    <span className="text-gray-800 text-lg ">ChatGPT
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={` ml-2 text-gray-500 text-lg mt-1 group-hover:text-gray-600 transition-transform`}
                        /></span>
                    <div className="translate-x-30">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <Card className="w-105 h-46 m-3 rounded-3xl absolute bottom-0 ">
                    <div className="h-10 border-2 pl-2 border-black rounded-2xl flex items-center w-98 -ml-3 -mt-3 ">
                       <TiDocumentText className="text-2xl mr-2 stroke-0" /> <p className="text-black font-medium">New document</p>
                    </div>
                    <div className="flex items-center -ml-3 h-18">
                        <Input placeholder="Ask anything">
                        </Input>
                    </div>
                    <span className="-ml-8 flex scale-90">
                        <Button
                            className="gap-1"
                            variant="secondary"
                        >
                            <FontAwesomeIcon icon={faPaperclip} /> Attach
                        </Button>
                        <Button className="gap-1 ml-2.5" variant="secondary">
                            <FontAwesomeIcon icon={faGlobe} /> Search
                        </Button>
                        <Button className="gap-1 ml-2.5" variant="secondary">
                            <FontAwesomeIcon icon={faLightbulb} /> Reason
                        </Button>
                        <button
                            className="h-12 w-12 translate-x-15 cursor-pointer rounded-full flex items-center justify-center bg-black text-white -translate-y-2"
                        >
                            <FontAwesomeIcon icon={faArrowUp} size="sm" />
                        </button>
                    </span>
                </Card>
            </div>
        </>
    )
}

export default SideBar
