import Card from "./Card"
import Button from "./Button"
import { Link } from "react-router-dom"

function SmarterResponses() {
    return (
        <>
            <Card className="w-7xl scale-75 rounded-4xl">
                <div className="flex justify-between items-center">
                    <p>Get smarter responses, upload files and images, and more.</p>
                    <div className="flex ">

                        <Link to="/Login"> <Button variant="primary" className=" h-10">
                            Login
                        </Button>&nbsp;&nbsp;
                            <Button variant="secondary" className="w-40 ">
                                Sign up for free
                            </Button></Link>
                    </div>
                </div>

            </Card>
        </>
    )
}

export default SmarterResponses