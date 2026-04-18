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
import { IoChatbubbleOutline } from "react-icons/io5";
import { Featueresf } from "./useCard";
import { Link } from "react-router-dom";


function MoreInformation() {
    return (
        <>
            <Headerss />
            
          <Featueresf text="Effortlessly design anything: presentations, logos, social media posts and more " name="DALL.E" imgsrc="imges/images11.jpg" link="By ChatGPT" description="Effortlessly design anything: presentations, logos, social media posts and more " />

            <div className="ml-65">
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
                    <Cards className="w-3xl" title="Web Browsing" description="I can browse the web to help you gather information  or conduct research" link="By ChatGPT" imgsrc="imges/image1.jpg" >
                    </Cards>
                </div>
              <Link to="/middle">   <div className="cursor-pointer flex items-center rounded-full p-3 gap-3 bg-black text-white justify-center w-4xl mt-10 mb-3">
                    <IoChatbubbleOutline className="text-xl" /> Start Chat
                </div></Link>
            </div>
        </>
    )
}

export default MoreInformation