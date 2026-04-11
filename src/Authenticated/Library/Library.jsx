import LibHeader from "./LibHeader";
import { useImage } from "../../hooks/useImage";
import usePromptImage from "../../hooks/usePromptImage";


function Library({ toggleSidebar, isSidebarOpen }) {
    const { images } = useImage();
    const { handleImageClick } = usePromptImage();

    return (
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
            <LibHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="p-8 max-w-7xl -mt-5">
                <h2 className={`text-2xl font-semibold mb-4 ${isSidebarOpen ? 'pl-0' : 'pl-20'}`}>Gallery</h2>
                {images.length === 0 ? (
                    <p className="text-gray-500 flex justify-center items-center h-screen">No images uploaded yet.</p>
                ) : (
                    <div className={`w-full scroll-smooth max-h-screen pb-[50vh] overflow-y-auto no-scrollbar grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ${isSidebarOpen ? 'pl-0' : 'pl-20'}`}>
                        {images.map((img, index) => (
                            <div key={index} onClick={() => handleImageClick(img)} className="aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                                <img src={img} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Library