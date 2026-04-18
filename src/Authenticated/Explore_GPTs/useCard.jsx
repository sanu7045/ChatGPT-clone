import { BsThreeDots } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


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
                <BsThreeDots className='cursor-pointer text-2xl'  />
                <RxCross1 className='cursor-pointer text-2xl'onClick={handlePrev} />
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

