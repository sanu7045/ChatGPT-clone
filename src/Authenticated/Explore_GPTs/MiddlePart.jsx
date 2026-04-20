import { useState } from 'react';
import { Butttons, Featueresf } from './useResuableCard'
import { GoGlobe } from 'react-icons/go';
import { Div } from './useResuableCard';
import Hero2 from '../Search_Chat/Hero2';
import TempHeader from '../Search_Chat/TempHeader';
import Footer from '../../components/Footer';
import SearchChats from '../Search_Chat/SearchChats';

function MiddlePart() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='relative h-screen overflow-y-auto scroll-smooth'>
            {isSidebarOpen && (
                <div className="fixed inset-y-0 left-0 w-65 h-full bg-white z-50 border-r shadow-xl">
                    <SearchChats toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                </div>
            )}

            <div className={`m-2 transition-all duration-300 ${isSidebarOpen ? '-ml-2' : 'pl-0'}`}>
                <TempHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} showUpgrade={false} showTemp={false} />
            </div>

            <div className={`transition-all duration-300 ${isSidebarOpen ? 'pl-60' : 'pl-0'}`}>
                <Featueresf name="DALL.E" link="By ChatGPT" icon={<GoGlobe />} hidediv={false} imgsrc="imges/images11.jpg" showdiv={true} hideicon={false} description="Effortlessly design anything: presentations, logos, social media posts and more." />

                <div className="flex justify-center gap-5">
                    <Div text="How about an inspirational quote graphic for social me..." />
                    <Div text="I need a poster for our online store seasonal sale" />
                    <Div text="Highlight my favourite hiking trail in a Facebook post" />
                    <Div text="Create an infographic showcasing the benefites of meditation..." />
                </div>
                <div className='flex justify-center mt-10'>
                    <Hero2 hideText={false} isCentered={false} />
                </div>

                <Butttons />

                <div className='flex justify-end mt-10'>
                    <Footer showMessage={false} />
                </div>
            </div>
        </div>
    )
}

export default MiddlePart
