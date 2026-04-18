import { faPaperclip, faGlobe, faLightbulb, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiVoiceprintFill } from "react-icons/ri";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Main from "./Main1.jsx";
import { useState } from "react";


export default function Hero({ inputValue = "", setInputValue }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    console.log("Submitted:", inputValue);
    navigate(`/display/${encodeURIComponent(inputValue)}`);
    setInputValue("");
  };

  const [isListVisible, setIsListVisible] = useState(false);

  
  const sentences = [
    "Welcome back, explorer!",
    "Ready for another session?",
    "The early bird catches the code.",
    "Keep it simple, keep it elegant.",
    "What can I help with?"
  ];


  const [randomText] = useState(() => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  });
  return (
    <>
    
      <div className="scale-75 relative left-1/2 -translate-x-1/2 w-full max-w-4xl z-10">
        <div className="text-5xl mt-30 justify-self-center">
          <p>{randomText}</p>
        </div>

        <Card className="w-4xl h-34 rounded-4xl justify-self-center mt-15 mb-5">
          <Input
            className="w-full p-4 border border-gray-200 rounded-2xl shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-100 mb-8"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything"
          />

          <div className="flex justify-between items-center mt-3.5 ">
            <span>
              <Button className="gap-1" variant="secondary">
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
          </div>

        <div className="scale-80 -mt-10 w-full">
          <Main
            setInputValue={setInputValue}
            isListVisible={isListVisible}
            setIsListVisible={setIsListVisible}
          />
        </div>
      
    </>
  );
}