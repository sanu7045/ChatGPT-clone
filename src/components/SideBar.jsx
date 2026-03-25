import { useState } from "react";
import { SlNotebook } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import data from "../data/response.json";
import { followUpContent } from "../data/followupsContent";
import FollowUpQuestions from "./FollowUpQuestions";
import PromptHeader from "./PromptHeader";
import { PiPencilSimpleLineLight, PiCopyLight } from "react-icons/pi";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { faPaperclip, faGlobe, faArrowUp, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { TiDocumentText } from "react-icons/ti";


function SideBar({ toggleSidebar }) {
    const [promptCopied, setPromptCopied] = useState(false);
    const location = useLocation();

    // Extract promptKey from /display/:promptKey
    const match = location.pathname.match(/\/display\/(.+)/);
    const promptKey = match ? decodeURIComponent(match[1]) : null;

    let contentToRender = "";
    if (promptKey) {
        const cleanKey = promptKey.replace(/^['"]|['"]$/g, "").trim();
        const isHiPrompt = cleanKey.toLowerCase() === "hi";

        if (isHiPrompt) {
            contentToRender = "Hi there! How can I help you?";
        } else {
            contentToRender = data[cleanKey];
            if (!contentToRender) {
                for (const parentKey in followUpContent) {
                    if (followUpContent[parentKey][cleanKey]) {
                        contentToRender = followUpContent[parentKey][cleanKey];
                        break;
                    }
                }
            }
        }
    }
    const handlePromptCopy = () => {
        if (promptKey) {
            navigator.clipboard.writeText(promptKey);
            setPromptCopied(true);
            setTimeout(() => setPromptCopied(false), 2000);
        }
    };

    return (
        <>
            <div className="bg-gray-100 h-screen w-95 z-100 pt-2">
                <div className="scale-85 flex gap-10 text-2xl">
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

                <div className="flex-1 overflow-y-auto px-5 mt-4 no-scrollbar">
                    {promptKey && (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="scale-75 origin-right h-full bg-gray-100 rounded-4xl shadow-lg flex items-center justify-end overflow-hidden">
                                    <PromptHeader 
                                        sentence={promptKey} 
                                        className="m-0 h-full flex items-center" 
                                        showCopy={false}
                                    />
                                </div>
                                <button
                                    onClick={handlePromptCopy}
                                    className="flex items-center gap-1 text-xs transition-all duration-500 text-black hover:opacity-100 mr-2"
                                >
                                    <PiCopyLight className="text-lg" />
                                    {promptCopied ? <span>copied</span> : <span></span>}
                                </button>
                            </div>
                            <div className="px-2 transition-all duration-500">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {contentToRender || "Response not found."}
                                </p>
                            </div>
                            <div className="scale-80 ml-2 -translate-y-10 origin-left pb-[30vh]">
                                <FollowUpQuestions promptKey={promptKey} />
                            </div>
                        </div>
                    )}
                </div>

                <Card className="w-85 scale-95 flex justify-self-center -translate-y-5  h-40 rounded-3xl absolute bottom-0 ">
                    <div className="-translate-y-3 scale-95  -translate-x-3 h-10 border-2 pl-2 border-black rounded-2xl flex items-center ">
                       <TiDocumentText className="text-2xl mr-2 stroke-0" /> <p className="text-black font-medium">New document</p>
                    </div>
                    <div className="flex items-center scale-85 -ml-8 h-18 -translate-y-5">
                        <Input placeholder="Ask anything">
                        </Input>
                    </div>
                    <span className="-ml-12 flex scale-75 -translate-y-8">
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
                            className="h-12 w-12 translate-x-10 cursor-pointer rounded-full flex items-center justify-center bg-black text-white -translate-y-2"
                        >
                            <FontAwesomeIcon icon={faArrowUp} size="sm" />
                        </button>
                    </span>
                   
                </Card>
                 <div className="bottom-1 fixed text-xs text-gray-700 mx-14">
                        <p>ChatGPT can make mistakes. Check important info.</p>
                    </div>
            </div>
        </>
    )
}

export default SideBar