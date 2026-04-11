import { HiArrowTurnDownLeft } from "react-icons/hi2";

function PromptLib() {
    const image = localStorage.getItem("prompt_image") || "";

    if (!image) return null;

    return (
        <div className="flex flex-col gap-3 my-4 w-screen max-w-5xl items-end">
            <div className="flex gap-3 justify-end w-full">
                <HiArrowTurnDownLeft className="text-xl text-gray-500 scale-x-[-1] mt-3" />
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm shrink-0">
                    <img src={image} className="w-full h-full object-cover" alt="Selected" />
                </div>
            </div>
            <div className="flex rounded-3xl bg-gray-100 text-sm text-black p-3 max-w-2xl text-center">
                <p>Refer to this figure to generate a gradient color diagram.</p>
            </div>
        </div>
    );
}

export default PromptLib;