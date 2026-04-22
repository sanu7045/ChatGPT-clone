import Card from "./Card";
import { FiRefreshCw } from "react-icons/fi";
import { PiGlobeSimple } from "react-icons/pi";

function SwitchModel() {
    return (
        <>
            <Card className=" w-[250px] rounded-2xl flex flex-col cursor-pointer">
                <p className="text-sm text-gray-400">
                    Switch Model
                </p>

                <p className="text-sm text-black mt-3 hover:bg-gray-100 p-1 rounded-lg">
                    Auto
                </p>
                <span className="flex flex-col mt-3 text-black hover:bg-gray-100 p-1 rounded-lg">GPT-40
                    <p className="text-gray-400 text-sm">
                        Great for most tasks
                    </p>
                </span>
                <span className="flex flex-col mt-3 text-black hover:bg-gray-100 p-1 rounded-lg">04-mini
                    <p className="text-gray-400 text-sm">
                        Fastest at advances reasoning
                    </p>
                </span>
                <span className="flex flex-col mt-3 text-black hover:bg-gray-100 p-1 rounded-lg">GPT-40 mini
                    <p className="text-gray-400 text-sm">
                        Faster for every tasks
                    </p>
                </span>
                <hr className="text-gray-300 mt-3 mb-3" />
                <div className="flex  justify-between items-center hover:bg-gray-100 p-1 rounded-lg">
                    <span className="flex flex-col  text-black  ">Try again
                        <p className="text-gray-400 text-sm">
                            GPT-40
                        </p>
                    </span>
                    <FiRefreshCw className="text-xl text-black hover:animate-spin" />
                </div>
                <div className="flex  justify-between items-center hover:bg-gray-100 p-1 rounded-lg">
                    <span className="flex flex-col mt-3 text-black">Search the web</span>
                    <PiGlobeSimple className="text-2xl text-black hover:animate-pulse " />
                </div>
            </Card>
        </>
    )
}

export default SwitchModel