import LibHeader from "./LibHeader";
import { useImage } from "../../hooks/useImage";

function Library({ toggleSidebar, isSidebarOpen }) {
    const { images } = useImage();
    
    return (
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
            <LibHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="p-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
                {images.length === 0 ? (
                    <p className="text-gray-500">No images uploaded yet.</p>
                ) : (
                    <div className="h-xl w-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img, index) => (
                            <div key={index} className="aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all">
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