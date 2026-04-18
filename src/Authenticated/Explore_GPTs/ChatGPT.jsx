import Cards from "./useCard"


function ChatGPT() {
  return (
    <>
    <div className={`overflow-y-auto flex flex-col`} >
                <p className="font-semibold text-2xl text-black mb-1">ChatGPT</p>
                <p className="text-gray-400 text-sm">GPTs created by the ChatGPT team</p>
            </div>
            <div className="grid grid-cols-2 gap-y-5 my-5 w-5xl">
                <Cards title="Monday" description="A personality experiment. You may not like it. Itt may not like you" link="By chatgpt.com" imgsrc="imges/image2.jpg" number="1" className=" bg-white">
                </Cards>
                <Cards title="DALL.E" description="OpenAI's legacy image generation model. A new model is rolling out in ChatGPT." link="By chatgpt.com" imgsrc="imges/image3.jpg" number="2" className=" bg-white">
                </Cards>
                  <Cards title="Data Analyst" description="Drop in any file and i can help anlayze and  visualize your data." link="By chatgpt.com" imgsrc="imges/images 5.jpg" number="3" className=" bg-white">
                </Cards>
                  <Cards title="Hot Mods" description="Let's modify your image into something really wild. Upload an image and let's go !" link="By chatgpt.com" imgsrc="imges/images7.jpg" number="4" className=" bg-white">
                </Cards>
                  <Cards title="Creative Writing Coach" description="I'm eager to read your work and give your feedback to improve your skills." link="By chatgpt.com" imgsrc="imges/images8.jpg" number="5" className=" bg-white">
                </Cards>
                  <Cards title="Coloring Book Hero" description="Take any idea and turn it into whimsical coloring book pages." link="By chatgpt.com" imgsrc="imges/images10.jpg" number="6" className=" bg-white">
                </Cards>
                 <div className="border flex items-center justify-center border-gray-200 rounded-full w-4xl p-2 mb-5">
                    See more
                </div>
                                  
                 
                
            </div>
    </>
  )
}

export default ChatGPT