import { useState } from 'react'
import Share from './Share'
import PromptLib from './PromptLib'
import Processingimage from './Processingimage'
import Hero2 from '../Search_Chat/Hero2'
import Footer from '../../components/Footer'
import SearchChats from '../Search_Chat/SearchChats'
import LoadingImage from './useLoadingImage'


function SharePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {isSidebarOpen && (
                <div className="fixed inset-y-0 left-0 w-65 h-full bg-white z-50 border-r shadow-xl">
                    <SearchChats toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                </div>
            )}

            <div className={`flex flex-col h-full transition-all duration-300 ${isSidebarOpen ? 'pl-0 mt-1' : 'pl-0'}`}>
                <Share toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <div className='fixed ml-10 top-15 left-1/2 -translate-x-1/2 w-screen max-w-7xl px-30 pointer-events-none overflow-y-auto no-scrollbar h-screen pb-[40vh] scroll-smooth'>
                    <div className={`pointer-events-auto origin-right -ml-25 transition-all duration-300 ${isSidebarOpen ? 'pl-15' : 'pl-0'}`}>
                        <PromptLib toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    </div>
                    <div className={`my-10 origin-left pointer-events-auto mx-10 transition-all duration-300 ${isSidebarOpen ? 'pl-50' : 'pl-0'}`}>
                        <LoadingImage toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    </div>
                </div>
                <div className='fixed bottom-2 left-1/2 -translate-x-1/2 w-screen flex flex-col items-center pl-0 transition-all duration-300'>
                    <div className="w-screen">
                        <Hero2 className="w-full" hideText={false} isCentered={false} isSidebarOpen={isSidebarOpen} />
                    </div>
                    <div className={`w-full flex justify-end -mt-16 transition-all duration-300 ${isSidebarOpen ? 'pr-0' : 'pr-0'}`}>
                        <Footer showMessage={false} isFixed={false} />
                    </div>
                    <p className={`text-center text-xs text-gray-500 -mt-5 transition-all duration-300 ${isSidebarOpen ? 'pl-70' : 'pl-0'}`}>
                        ChatGPT can make mistakes. Check important info.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SharePage