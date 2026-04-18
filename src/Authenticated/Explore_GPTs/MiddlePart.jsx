import { Featueresf } from './useCard'
import { GoGlobe } from 'react-icons/go';
import { Div } from './useCard';
import Hero2 from '../Search_Chat/Hero2';
import TempHeader from '../Search_Chat/TempHeader';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { GoPlus } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";

function MiddlePart() {
    return (
        <div className=''>
            <div className="m-2">

                <TempHeader showUpgrade={false} showTemp={false} />
            </div>

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
            <div className='flex justify-center mt-10 gap-5 mb-30 -ml-50'>
                <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Gold</Button>
                <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Fauvism</Button>
                <Button variant='secondary' className='gap-2 flex items-center w-20'><GoPlus />Cartoon</Button>
                <Button variant='secondary' className='gap-2 flex items-center w-28'><GoPlus />Cave art</Button>
                <Button variant='secondary' className='gap-2 flex items-center w-28'><GoPlus />Close-up</Button>
                <button className="rounded-full w-10 h-10 justify-center flex items-center border border-gray-200 p-2"><FiRefreshCw /></button>
            </div>
            


           


            <Footer showMessage={false} />
        </div>
    )
}

export default MiddlePart
