function ProcessedImage() {
    const image = localStorage.getItem("prompt_image") || "";
    if (!image) return null;

    return (
        <div className="animate-fadeIn">
            <p className="text-base mb-3 text-black">Image created</p>
            <img src={image} alt="" className='w-sm h-[350px] rounded-3xl object-cover' />
        </div>
    )
}

export default ProcessedImage;
