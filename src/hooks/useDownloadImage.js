export default function downloadStoredImage() {
    // 1. Get the image data (Base64 string or URL) from localStorage
    const imageData = localStorage.getItem("prompt_image");

    // 2. Check if the image actually exists
    if (!imageData) {
        console.error("No image found in localStorage");
        return;
    }

    // 3. Create a temporary download link
    const link = document.createElement("a");
    link.href = imageData;
    
    // 4. Set the default file name for the download
    link.download = "my_prompt_image.png"; 

    // 5. Append, click, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
