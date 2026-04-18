import Cards from "./useResuableCard.jsx"


function Trending() {
    return (
        <>

            <div className={`overflow-y-auto flex flex-col`} >
                <p className="font-semibold text-2xl text-black mb-1">Trending</p>
                <p className="text-gray-400 text-sm">Most popular GPTs by our community</p>
            </div>
            <div className="grid grid-cols-2 gap-y-5 my-5 w-5xl">
                <Cards title="Behance" description="the World's Best Creators Are On Behance. A comprehensive platform to help hires and creato..." link="By behance.com" imgsrc="imges/image1.jpg" number="1" className=" bg-white p-0">
                </Cards>
                <Cards title="Dribble" description="Find Top Designers & Creative Professionals on Dribble. We are where designers gain inspiration,..." link="By dribble.com" imgsrc="imges/dribble.png" number="2" className=" bg-white p-0">
                </Cards>
                <Cards title="Logo Creator" description="use me to generate professional logo designs and app icons !" link="By Figma.com" imgsrc="imges/images13.jpg" number="3" className="bg-white p-0">
                </Cards>
                <Cards title="Write For Me" description="Write tailored, engaiging content with a focus on quality, relevance and precise..." link="By figma.com" imgsrc="imges/images12.jpg" number="4" className="bg-white p-0">
                </Cards>
                <Cards title="Framer" description="Where designing and building become one. A true design canvas, not just a visual Html e..." link="By framer.com" imgsrc="imges/framer.png" number="5" className="bg-white p-0">
                </Cards>
                <Cards title="Pinterest" description="Discover recipes, home ideas, sytle inspiration and other ideas to try." link="By pinterest.com" imgsrc="imges/pinterest1.png" number="6" className="bg-white p-0">
                </Cards>
                <div className="border flex items-center justify-center border-gray-200 rounded-full w-4xl p-2">
                    See more
                </div>
            </div>



        </>
    )
}

export default Trending