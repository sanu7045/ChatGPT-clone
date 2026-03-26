import { useState } from "react";
import { faPaperclip, faGlobe, faLightbulb, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiVoiceprintFill } from "react-icons/ri";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Feature from "../assets/Utils/Feature";

export default function Hero1({ inputValue = "", setInputValue }) {
  const navigate = useNavigate();
  const [showFeature, setShowFeature] = useState(false);
  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    navigate(`/display/${encodeURIComponent(inputValue)}`);
    setInputValue("");
  };

  return (
    <div className="scale-70 justify-center w-full max-w-4xl z-50 relative">
      {showFeature && (
        <div className="absolute bottom-full -left-30 mb-4 z-50">
          <Feature />
        </div>
      )}
      <Card className="w-6xl rounded-4xl justify-self-center ">
        <Input
          className="w-full p-4 border border-gray-200 rounded-2xl shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask anything"
        />

        <div className="flex justify-between items-center mt-2">
          <span>
            <Button 
                className="gap-1" 
                variant="secondary"
                onClick={() => setShowFeature(!showFeature)}
            >
              <FontAwesomeIcon icon={faPaperclip} /> Attach
            </Button>
            <Button className="gap-1 ml-2.5" variant="secondary">
              <FontAwesomeIcon icon={faGlobe} /> Search
            </Button>
            <Button className="gap-1 ml-2.5" variant="secondary">
              <FontAwesomeIcon icon={faLightbulb} /> Reason
            </Button>
          </span>

          {/* TOGGLE LOGIC */}
          {!inputValue || inputValue.trim() === "" ? (
            <Link to="/Voice">
              <Button className="gap-2 flex justify-center items-center h-10 w-24" variant="primary">
                <RiVoiceprintFill className="text-2xl" />
                Voice
              </Button>
            </Link>
          ) : (
            <button
              onClick={handleSubmit}
              className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center bg-black text-white"
            >
              <FontAwesomeIcon icon={faArrowUp} size="sm" />
            </button>
          )}
        </div>
      </Card>
      <div className="flex justify-center items-center font-normal translate-y-3">
        <p > ChatGPT can make mistake. Check important info. </p>
      </div>
    </div>
  );
}
