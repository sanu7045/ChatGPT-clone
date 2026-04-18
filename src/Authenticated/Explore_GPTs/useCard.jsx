import { BsThreeDots } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GoGlobe } from 'react-icons/go';
import { CiLinkedin } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { FaHashtag } from 'react-icons/fa6';
import Button from "../../components/Button";
import { GoPlus } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";



function Cards({ title, description, link, imgsrc, className, number }) {
    return (
        <div className={twMerge(' flex w-90 p-4 bg-gray-100 rounded-xl', className)}>
            <p className='flex items-center mr-5 text-xl font-semibold'>
                {number}
            </p>
            <div className=' flex items-center gap-5 justify-center'>
                <img className='h-20 w-20 object-cover rounded-full ' src={imgsrc} alt="No image" />
                <div>
                    <p className='mb-1 font-semibold text-black'>
                        {title}
                    </p>
                    <div>
                        <p className='text-sm'>
                            {description}
                        </p>
                        <div>
                            <p className='text-xs text-gray-400 mt-1'>
                                {link}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;



export function Conversations({ description }) {
    return (
        <>
            <div className="flex items-center pl-2 pr-2 pt-2 pb-2 max-w-xs h-15  bg-gray-100 rounded-xl border border-gray-200 ">
                <p className="text-black text-sm ">
                    {description}
                </p>
            </div>

        </>
    )
}


export function Title({ title }) {
    return (
        <>
            <p className="text-black font-semibold text-xl mb-5 w-xl">
                {title}
            </p>
        </>
    )
}

export function Headerss() {
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate("/", { state: { view: "explore" } });
    }
    return (
        <>
            <div className='flex justify-end gap-5 m-5 '>
                <BsThreeDots className='cursor-pointer text-2xl' />
                <RxCross1 className='cursor-pointer text-2xl' onClick={handlePrev} />
            </div>
        </>
    )
}


export function Capabilities({ description }) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center">

                    <FaCheck className="text-green-500 text-lg" /> {description}
                </span>
            </div>

        </>
    )
}


export const ProgressBar = ({ progress, number }) => {
    return (
        <div className='flex gap-5 items-center'>
            {number}
            <div className="w-3xl bg-gray-200 rounded-full h-4">
                <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export const Featueresf = ({ name, imgsrc, link, icon, description, hidediv = true, hideicon = true }) => {
    return (
        <>
            <div className="flex flex-col gap-3 items-center justify-center">
                <img src={imgsrc} alt="no image" className="object-cover w-20 h-20 rounded-full mt-10" />
                <p className="text-2xl font-semibold">
                    {name}
                </p>
                <span className="text-gray-500 text-sm flex items-center gap-3">
                    {link}
                    {hideicon && (
                        <p className="bg-gray-200 rounded-full pl-2 pr-2 items-center flex gap-1 text-black">
                            <GoGlobe />
                            <CiLinkedin /> +1
                        </p>)}
                    {icon}
                </span>
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
                <p className="text-black text-sm flex-col flex items-center">
                    {description}<br />
                </p>

            </div>

            {hidediv && (<div className="flex mt-2 items-center justify-center ">
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
            </div>)}

        </>
    )
}

export const Div = ({ text }) => {
    return (
        <div className="max-w-40 h-auto flex mt-10 justify-self-center gap-5 bg-gray-100 rounded-xl p-2">
            <p className="flex items-center text-black text-sm w-lg">
                {text}
            </p>
        </div>
    )
}

export const Butttons = () => {
    return (
        <div className='flex justify-center mt-10 gap-5 mb-30 -ml-60 '>
            <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Gold</Button>
            <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Fauvism</Button>
            <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Cartoon</Button>
            <Button variant='secondary' className='gap-2 flex items-center w-28'><GoPlus />Cave art</Button>
            <Button variant='secondary' className='gap-2 flex items-center w-28'><GoPlus />Close-up</Button>
            <button className="rounded-full w-10 h-10 justify-center flex items-center border border-gray-200 p-2"><FiRefreshCw /></button>
        </div>
    )
}