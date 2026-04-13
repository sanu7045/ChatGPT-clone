import { useNavigate } from "react-router-dom";

function ProcessedImage({hideText = true}) {
    const navigate = useNavigate();
    const image = localStorage.getItem("prompt_image") || "";
    if (!image) return null;

    
    const handleBack = () => {
        navigate("/download");
    }
    return (
        <div className="animate-fadeIn cursor-pointer" onClick={handleBack}>
            {hideText &&( <p className="text-base mb-3 text-black">Image created</p>)}
            <img src={image} alt="" className='w-sm h-[350px] rounded-3xl object-cover' />
        </div>
    )
}

export default ProcessedImage;
