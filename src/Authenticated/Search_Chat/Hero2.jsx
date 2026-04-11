import Button from "../../components/Button"
import Input, { Input1 } from "../../components/Input"
import Card from "../../components/Card"
import { RiVoiceprintFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { useRef } from "react";
import { toast } from "sonner";
import { useImage } from "../../hooks/useImage";

function Hero2({ isSidebarOpen, hideText = true, isCentered = true }) {
    const fileInputRef = useRef(null);
    const { addImage } = useImage();

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                await addImage(file);
                toast("Image is added Successfully...");
            } catch (error) {
                console.error("Image saving error", error);
                toast.error("Failed to add image. It might be too large.");
            }
        }
    };
    
    return (  
        <>
            <div className={`flex justify-center transition-all duration-300 w-screen bg-white ${isCentered ? 'items-center h-screen' : 'my-8'} ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                <div className={`w-full max-w-7xl ${isCentered ? 'mt-15' : ''}`}>
                    {hideText && (<p className="text-2xl font-medium -translate-y-10 text-center">How can I help you today?</p>)}
                    <Card className="-translate-y-10 scale-70 rounded-4xl shadow-lg">
                        <Input placeholder="Ask anything..." className="w-full text-lg" />
                        
                        <div className="flex justify-between items-center mt-4 px-2">
                           
                            <div className="flex gap-4 items-center">
                              <div className="relative">
                                <Button 
                                onClick={handlePhotoClick} 
                                className="flex  gap-2 items-center hover:bg-gray-100 p-2 rounded-xl transition-all cursor-pointer">
                                  <GoPlus className="text-2xl" />
                                </Button>
                                <input 
                                  type="file" 
                                  accept="image/*" 
                                  ref={fileInputRef} 
                                  className="hidden" 
                                  onChange={handleFileChange}
                                />
                                {/* {isAddPhotoVisible && (
                                  <div className="absolute top-full left-0 mt-10 ml-10 transform -translate-x-1/4">
                                    <AddPhoto />
                                  </div>
                                )} */}
                              </div>
                                <Button className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-xl transition-all">
                                    <VscSettings className="text-2xl" /> 
                                    <span className="text-base font-normal">Tools</span>
                                </Button>
                            </div>

                           
                            <div className="flex gap-3 items-center">
                                <button className="flex justify-center items-center h-10 border cursor-pointer w-10 rounded-full transition-all hover:bg-gray-100" >
                                    <MdOutlineKeyboardVoice className="text-2xl" /> 
                                </button>
                                <button className="flex justify-center bg-black text-white items-center cursor-pointer  h-10 w-10 rounded-full transition-all" >
                                    <RiVoiceprintFill className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Hero2;