import { Card2 } from "../../components/Card";
import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <>

      <Card2 className="w-90 h-73 bg-white border border-gray-200 shadow-xl z-50 rounded-3xl animate-in fade-in zoom-in duration-200">
        <img src="/src/assets/images.jpg" className=" h-30 w-full mb-2" />
        <div className="pl-4">
          <p className="text-xl font-bold text-black">
            Try advanced features for free
          </p>
        </div>
        <div className="pl-4">
          <p className="font-normal text-black">
            Get smarter responses, upload files, create images, and more by
            logging in.
          </p>
        </div>
        <div className="mt-5 space-x-2 pl-4">
          <Link to="/Login"> <Button variant="primary" className="h-10">
            Log in
          </Button></Link>
          <Link to="/Login"><Button variant="secondary">Sign up</Button></Link>
        </div>
      </Card2>
    </>
  );
}
