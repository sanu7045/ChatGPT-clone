
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import { PiDownloadSimple, PiShareLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';

function DownloadHeader({isSidebarOpen}) {
    const navigate = useNavigate();
    const handleLibrary = () => {
        navigate("/", { state: { view: "library" } });
    }

    return (
        <div className={`flex justify-between items-center p-3 pl-5 pr-5 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
            <RxCross1 onClick={handleLibrary} className='cursor-pointer text-lg' />
            <div className='flex items-center gap-7 text-xl cursor-pointer '>
                <AiOutlineDislike />
                <AiOutlineLike />
                <HiOutlinePaintBrush />
                <PiDownloadSimple />
                <PiShareLight />
            </div>
        </div>
    )
}

export default DownloadHeader;