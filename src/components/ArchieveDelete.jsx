import { toast } from "sonner"
import { IoMdCheckmark } from "react-icons/io"
import { BsArchive } from "react-icons/bs"
import { RiDeleteBinLine } from "react-icons/ri"
import { useState } from "react"
import DeleteChat from "./DeleteChat";

function ArchiveDelete() {
    const [state, setState] = useState(true)
    const [deletee, setDeletee] = useState(false)

    const handleArchive = () => {
        setState(false)
        toast("Successfully archived chat.", {
            icon: <IoMdCheckmark className="text-green-500 text-2xl" />
        })
    }


    if (!state) return null;


    return (
        <>
            <div className="border h-20 w-40 flex justify-center items-center p-10 rounded-2xl border-white bg-gray-50 ">
                <div className="flex flex-col gap-1 cursor-pointer text-base">
                    {/* This now triggers the top-center toast */}
                    <span
                        onClick={handleArchive}
                        className="flex gap-4 items-center hover:opacity-80"
                    >
                        <BsArchive /> Archive
                    </span>

                    <span
                        onClick={() => setDeletee(!deletee)} className="flex gap-4 items-center text-red-500 hover:opacity-80">
                        <RiDeleteBinLine /> Delete
                    </span>
                    <div>
                        {deletee && (
                            <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
                                <DeleteChat onClose={() => setDeletee(false)} onDeleteSuccess={() => {
                                  setDeletee(false);
                                }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArchiveDelete
