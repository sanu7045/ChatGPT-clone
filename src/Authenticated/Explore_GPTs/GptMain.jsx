import Card from "../../components/Card"
import { CiSearch } from "react-icons/ci";
import Input from "../../components/Input";
import Featured from "./Featured";
import Trending from "./Trending";
import ChatGPT from "./ChatGPT";

function GptMain({ isSidebarOpen }) {
    return (
        <>
            <div className={`flex justify-center text-5xl font-semibold mb-5 transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                GPTs
            </div>
            <div className={`justify-center transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                <p className='flex justify-center'>
                    Discover and create custom  versions of ChatGPT that combine instructions, extra
                </p>
                <p className='flex justify-center'>
                    knowledge, and any combination of skills.
                </p>
            </div>
            <Card className={` mt-10 w-4xl justify-self-center h-15 transition-all duration-300 ${isSidebarOpen ? 'ml-90' : 'ml-0'}`}>
                <div className="flex items-center gap-2 -my-4 ">

                    <CiSearch className="text-2xl stroke-1 text-gray-400" />
                    <Input className="h-5 flex" placeholder="Search GPTs"></Input>
                </div>
                <div className="mt-10 -mx-5 flex text-gray-400 gap-4 cursor-pointer">
                    <p className="hover:text-black hover:border-b-2">
                        Featured
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Writing
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Productivity
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Research & Analysis
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Education
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Lifestyle
                    </p>
                    <p className="hover:text-black hover:border-b-2">
                        Programming
                    </p>

                </div>
                <div className="-mx-5 mt-10 ">
                    <Featured isSidebarOpen={isSidebarOpen} />
                    <Trending isSidebarOpen={isSidebarOpen} />
                    <ChatGPT isSidebarOpen={isSidebarOpen} />
                </div>
            </Card>

        </>

    )
}

export default GptMain