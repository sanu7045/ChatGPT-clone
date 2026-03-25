import Button from "../components/Button.jsx";
import { Card1 } from "../components/Card.jsx";
import { Input1 } from "../components/Input.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faOpenai,
  faApple,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleHome = () =>{
    navigate("/")
  }
  return (
    <>
    
        <div className="scale-80 absolute w-35">
         <button onClick={handleHome} className="hover:cursor-pointer h-10"> <FontAwesomeIcon
            icon={faOpenai}
            className="items-center absolute text-3xl text-black "
          />
          <span className=" m-11 text-xl font-semibold">ChatGPT</span>
          </button>
        </div>
      
      <div className="scale-75 justify-self-center -translate-y-10 ">
        <div className="justify-self-center text-2xl font-semibold">Log in</div>
        <div className="mt-5">
          <Input1 placeholder="Email" className=""></Input1>
          <div className="mt-4">
            <Input1 placeholder="Password" className=""></Input1>
          </div>
          <div className="mt-4 justify-self-center">
            <Button
              variant="primary"
              className="w-96 h-14  text-lg font-semibold"
            >
              Log in
            </Button>
          </div>
          <div className="mt-4 justify-self-center">
            <span className="text-sm text-gray-400  [word-spacing:12px]">
              Sign&thinsp;Up Forgot&thinsp;Password Contact&thinsp;Us
            </span>
          </div>
          <div className="flex items-center w-full mt-5">
            {/* Left Line */}
            <div className="grow border-t border-gray-200"></div>

            {/* "or" Text */}
            <span className="px-4 text-gray-500 text-sm font-semibold lowercase">
              or
            </span>

            {/* Right Line */}
            <div className="grow border-t border-gray-200"></div>
          </div>

          {/* Log in buttons */}

          <Button
            variant="secondary1"
            className="flex text-lg items-center font-semibold justify-center gap-3 w-96 h-15 mt-5"
          >
            <FcGoogle className="text-4xl" />
            <span>Log in with Google</span>
          </Button>
          <Button
            variant="secondary1"
            className="flex text-lg items-center font-semibold justify-center gap-3 w-96 h-15 mt-5"
          >
            <FontAwesomeIcon icon={faMicrosoft} className="text-3xl" />
            <span>Log in with Microsoft</span>
          </Button>
          <Button
            variant="secondary1"
            className="flex items-center text-lg font-semibold justify-center gap-3 w-96 h-15 mt-5"
          >
            <FontAwesomeIcon icon={faApple} className="text-4xl" />
            <span>Log in with Apple</span>
          </Button>
          <Button
            variant="secondary1"
            className="flex text-lg items-center font-semibold justify-center gap-3 w-96 h-15 mt-5"
          >
            <FontAwesomeIcon icon={faPhone} className="text-3xl" />
            <span>Log in with Phone</span>
          </Button>
          <div className="justify-self-center mt-10">
            <span className=" text-gray-500 [word-spacing:12px]">
              Terms&thinsp;&thinsp;of&thinsp;&thinsp;Use |
              Privacy&thinsp;&thinsp;Policy
            </span>
          </div>
          <div className="justify-self-center align-bottom mt-25 mb-10 text-gray-500">
            <FontAwesomeIcon icon={faCopyright} className="text-sm" /> 2025
            ChatGPT
          </div>
        </div>
      </div>
      
    </>
  );
}
