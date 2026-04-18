import Cards from "./useCard.jsx"
import { Link } from "react-router-dom";


const Featured = () => {

    
    return (
        <>
            <div className={`overflow-y-auto flex flex-col`}>
                <p className="font-semibold text-2xl text-black mb-1">Featured</p>
                <p className="text-gray-400 text-sm">Curated top picks from this week</p>
            </div>
            <div className="grid grid-cols-2 gap-y-10 my-5 w-5xl">
             <Link to="/information">   <Cards className="cursor-pointer"  title="DALL.E" description="OpenAI's legacy image generation model. For our latest model, ask ChatGPT to create an image in the..." link="By ChatGPT" imgsrc="imges/images11.jpg">
                </Cards></Link>
                <Cards title="Dribble" description="Find Top Designers & Creative Professionals on Dribble. We are where designers gain inspiration, f..." link="By dribble.com" imgsrc="imges/dribble.png">
                </Cards>
                <Cards title="Figma" description="Talk. Chat. Comment. Communicate via audio or chat to connect quickly within your file. Gather and keep tr..." link="By figma.com" imgsrc="imges/Figma.png" className=" ">
                </Cards>
            </div>


          


             
        </>
    )
}

export default Featured;