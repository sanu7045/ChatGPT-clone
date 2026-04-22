import Card from "./Card"
import Button from "./Button"
import { toast } from "sonner"
import { IoMdCheckmark } from "react-icons/io"
import { useState } from "react"

function DeleteChat({onClose, onDeleteSuccess}) {

    const [state, setState] = useState(true)
    const handleDelete = () => {
    setState(false)
    toast("Successfully deleted chat.", {
      icon: <IoMdCheckmark className="text-green-500 text-2xl" />
    })
    if (onDeleteSuccess) onDeleteSuccess();
  }
  if (!state) return null
    return (
        <>
            <div className="scale-80">
                <Card className="w-2xl rounded-4xl flex flex-col">
                  <p className="text-2xl font-bold text-black my-2">Delete chat ?
                    </p>  
                    <hr />
                    <p className="text-base text-black font-semibold my-2">
                        This will delete "Alright! Here's something fresh and fascinating..."
                    </p>
                    <p className="text-sm text-gray-400 ">
                        Visit <u className="cursor-pointer"> settings</u> to delete any memories and saved during this chat.
                    </p>
                    <div className="flex justify-end gap-4 mt-5">
                    <Button onClick={onClose} className="hover:bg-gray-200" variant="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} className="hover:bg-red-400 bg-red-500 text-white" variant="secondary">
                        Delete
                    </Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default DeleteChat