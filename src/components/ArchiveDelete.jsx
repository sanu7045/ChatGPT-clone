import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

function ArchiveDelete() {
    return (
        <div className="border h-20 w-40 flex justify-center items-center p-10 rounded-2xl border-white bg-gray-100  ">
            <div className="flex flex-col gap-1 cursor-pointer">
                <span className="flex gap-4 items-center"><BsArchive />Archieve</span>
                <span className="flex gap-4 items-center text-red-500"><RiDeleteBinLine />Delete</span>
            </div>

        </div>
    )
}

export default ArchiveDelete