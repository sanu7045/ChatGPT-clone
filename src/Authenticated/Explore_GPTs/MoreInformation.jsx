import { GoGlobe } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import Cards, { Headerss, Title } from "./useCard";
import { Conversations } from "./useCard";
import { Capabilities } from "./useCard";
import { ProgressBar } from "./useCard";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";


function MoreInformation() {
    return (
        <>
            <Headerss />
            
            <div className="flex flex-col gap-3 items-center justify-center">
                <img src="/imges/images11.jpg" alt="no image" className="object-cover w-20 h-20 rounded-full mt-10" />
                <p className="text-2xl font-semibold">
                    DALL.E
                </p>
                <span className="text-gray-500 text-sm flex items-center gap-3">
                    By ChatGPT <p className="bg-gray-200 rounded-full pl-2 pr-2 items-center flex gap-1 text-black">
                        <GoGlobe />
                        <CiLinkedin /> +1
                    </p>
                </span>
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
                <p className="text-black text-sm flex items-center">
                    Effortlessly design anything: presentations, logos, social media posts <br />
                </p>
                <p className="text-black text-sm flex items-center">
                    and more.
                </p>
            </div>

            <div className="flex mt-2 items-center justify-center ">
                <span className="flex flex-col items-center mr-10 ">
                    <p className="flex items-center gap-2 text-black font-bold">
                        <FaStar />4.2
                    </p>
                    <p className="text-gray-400 text-sm">
                        Ratings (50K+)
                    </p>
                </span>
                <span className="flex flex-col items-center mr-10 mt-5 ">
                    <p className="flex items-center text-black font-bold">
                        <FaHashtag />3
                    </p>
                    <p className="text-gray-400 text-sm">
                        in Research & Analysis
                    </p>
                    <p className="text-gray-400 text-sm">
                        (Global)
                    </p>
                </span>

                <span className="flex flex-col items-center mr-10 ">
                    <p className="flex items-center gap-2 text-black font-bold">
                        2M+
                    </p> <p className="text-gray-400 text-sm">
                        Conversations
                    </p>
                </span>
            </div>


            <div className="ml-45">
                <div className="mt-20 ">
                    <Title title="Conversations" />
                    <div className="grid grid-cols-2 w-3xl items-center gap-5 mt-2">
                        <Conversations description="Does wearing an activity tracker improve health outcomes ?" />
                        <Conversations description="Does wearing an activity tracker improve health outcomes ?" />
                        <Conversations description="Does wearing an activity tracker improve health outcomes ?" />
                        <Conversations description="Does wearing an activity tracker improve health outcomes ?" />
                    </div>
                </div>

                <div className="mt-5">
                    <Title title="Capabilities" />
                    <Capabilities description="Web Search" />
                    <Capabilities description="Web Search" />
                    <Capabilities description="Web Search" />
                </div>


                <div className="mt-5 flex flex-col gap-5">
                    <Title title="Ratings" />
                    <ProgressBar number={<RiNumber5 />} progress={80} />
                    <ProgressBar number={<RiNumber4 />} progress={60} />
                    <ProgressBar number={<RiNumber3 />} progress={50} />
                    <ProgressBar number={<RiNumber2 />} progress={30} />
                    <ProgressBar number={<RiNumber1 />} progress={10} />
                </div>

                <div className="mt-15">
                    <Title title="More by ChatGPT" />
                    <Cards title="Web Browsing" description="i can browse the web to help you gather information  or conduct research" link="By ChatGPT" imgsrc="imges/image1.jpg" number="1" className=" bg-white p-0">
                    </Cards>
                </div>
            </div>
        </>
    )
}

export default MoreInformation