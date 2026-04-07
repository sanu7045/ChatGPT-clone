import { IoAttach } from "react-icons/io5"

function AddPhoto() {
    return (
        <div className="scale-110 text-black flex border border-gray-50 bg-gray-100 p-5 rounded-2xl w-40 h-12 justify-center items-center">
            <div className="cursor-pointer flex items-center gap-2 px-2 py-1 border border-gray-500 rounded-full h-8 w-35 bg-white">
                <IoAttach className="text-xl  rotate-45" /><p className="text-xs">Add Image</p>
            </div>
        </div>
    )
}

export default AddPhoto