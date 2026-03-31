import useImages from '../hooks/useImages';

export default function Images({ isSidebarOpen }) {
    const { images } = useImages();

    return (
        <div className={`overflow-y-scroll no-scrollbar transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'} flex flex-col items-center w-full`}>
            <div className={` scale-70 flex flex-wrap justify-center gap-6 max-w-7xl -my-30 w-full`}>
                {images.map((path, index) => (
                    <div key={index} className="cursor-pointerk relative group overflow-hidden rounded-4xl shadow-md w-60 h-60 shrink-0">
                        <img
                            src={path}
                            alt={`Upload ${index}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
            {images.length === 0 && (
                <p className="text-center text-gray-500 my-[60vh]">No images left!</p>
            )}
        </div>
    );  
}
