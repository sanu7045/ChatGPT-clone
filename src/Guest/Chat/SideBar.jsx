import useContentLookup from "../../hooks/useContentLookup";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { SlNotebook } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import FollowUpQuestions from "../../components/FollowUpQuestions";
import PromptHeader from "./PromptHeader";
import { PiPencilSimpleLineLight, PiCopyLight } from "react-icons/pi";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { faPaperclip, faGlobe, faArrowUp, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { TiDocumentText } from "react-icons/ti";


function SideBar({ toggleSidebar }) {
    const location = useLocation();

    // Extract promptKey from /display/:promptKey
    const match = location.pathname.match(/\/display\/(.+)/);
    const promptKey = match ? decodeURIComponent(match[1]) : null;

    const contentToRender = useContentLookup(promptKey);
    const { copied: promptCopied, copy } = useCopyToClipboard();
    const handlePromptCopy = () => {
        if (promptKey) copy(promptKey);
    };

   const handleClick = ()=> {
console.log("clicked")
    }
    return (
        <>
            <div className="bg-gray-100 h-screen w-95 z-100 pt-3 pl-3">
                <div className="flex gap-10 text-xl">
                    <SlNotebook />
                    <button onClick={toggleSidebar}>
                        <PiPencilSimpleLineLight className="text-2xl cursor-pointer" />
                    </button>
                    <span className="text-gray-800 text-base ">ChatGPT
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={` ml-1 mr-25 text-gray-500 text-sm  group-hover:text-gray-600 transition-transform`}
                        />
                    </span>
                    <BsThreeDotsVertical onClick={handleClick}/>

                </div>

                <div className="flex-1 overflow-y-auto px-5 mt-4 no-scrollbar">
                    {promptKey && (
                        <div className="flex flex-col gap-4 ">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="scale-80 origin-right h-full  rounded-3xl shadow-xl border flex items-center justify-end">
                                    <PromptHeader
                                        sentence={promptKey}
                                        className=" flex items-center"
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