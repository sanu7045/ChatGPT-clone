import { useState, useRef, useCallback } from "react";
import useGlobalClick from "../hooks/useGlobalClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb, faCode, faFileLines, faGraduationCap,
  faDatabase, faWandMagicSparkles, faHandSparkles, faImage,
} from "@fortawesome/free-solid-svg-icons";
import Button from "/src/components/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Main({ setInputValue, setIsListVisible }) {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  //  ref to track the component area
  const containerRef = useRef(null);

  const categories = [
    { id: "brain", label: "Brainstorm", icon: faLightbulb, color: "text-amber-300", 
      sentences: ["Brainstorm a name for my coffee shop", "Ideas for a 5-year-old's birthday", "New project ideas for React"] },
    { id: "code", label: "Code", icon: faCode, color: "text-sky-500", 
      sentences: ["Explain how a React Hook works", "Write a Python script to scrape a site", "Debug this JavaScript error"] },
    { id: "sum", label: "Summarize text", icon: faFileLines, color: "text-orange-400", 
      sentences: ["Summarize this long article", "Give me 5 bullet points from this text", "Explain this like I'm five"] },
    { id: "adv", label: "Get advice", icon: faGraduationCap, color: "text-sky-300", 
      sentences: ["Career advice for a junior dev", "How to stay motivated while studying", "Study tips for finals"] },
    { id: "data", label: "Analyze data", icon: faDatabase, color: "text-sky-300", isHidden: true, 
      sentences: ["Find trends in this data", "Clean up these spreadsheet headers", "Visualize these results"] },
    { id: "img", label: "Analyze images", icon: faImage, color: "text-red-400", isHidden: true, 
      sentences: ["Describe what is in this image", "Transcribe the text in this photo", "Identify the colors in this picture"] },
    { id: "plan", label: "Make a plan", icon: faWandMagicSparkles, color: "text-green-300", isHidden: true, 
      sentences: ["Workout plan for a busy week", "7-day meal prep itinerary", "Travel plan for Tokyo"] },
    { id: "surp", label: "Surprise me", icon: faHandSparkles, color: "text-sky-300", isHidden: true, 
      sentences: ["Tell me a mystery fact", "Recommend a random book", "Surprise me with a horoscope"] },
  ];

  useGlobalClick(containerRef, useCallback(() => {
    setShowMore(false);
    setActiveCategory(null);
    if (setIsListVisible) setIsListVisible(false);
  }, [setIsListVisible]));

  const handleSelectSentence = (sentence) => {
    setInputValue(sentence);
    setActiveCategory(null);
    if (setIsListVisible) setIsListVisible(false);
    navigate(`/display/${encodeURIComponent(sentence)}`);
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (setIsListVisible) setIsListVisible(true);
  };

  return (
    
    <div ref={containerRef} >
        
      {!activeCategory ? (
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.filter(c => !c.isHidden || (c.id === "data" && showMore)).map(cat => (
              <Button 
                key={cat.id} 
                variant="secondary" 
                className="px-6 py-2 h-auto min-w-max flex items-center"
                onClick={() => handleCategoryClick(cat)}
              >
                <FontAwesomeIcon icon={cat.icon} className={`mr-2 ${cat.color}`} />
                <span className="whitespace-nowrap">{cat.label}</span>
              </Button>
            ))}
            {!showMore && (
              <Button 
                variant="secondary" 
                className="px-8 py-2"
                onClick={() => setShowMore(true)}
                onMouseEnter={() => setShowMore(true)}
              >
                More
              </Button>
            )}
          </div>

          {showMore && (
            <div 
              className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-top-2"
              onMouseLeave={() => setShowMore(false)}
            >
              {categories.filter(c => c.isHidden && c.id !== "data").map(cat => (
                <Button 
                  key={cat.id} 
                  variant="secondary" 
                  className="px-6 py-2 h-auto min-w-max flex items-center" 
                  onClick={() => handleCategoryClick(cat)}
                >
                  <FontAwesomeIcon icon={cat.icon} className={`mr-2 ${cat.color}`} />
                  <span className="whitespace-nowrap">{cat.label}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* This is the list that will now disappear on outside click because its parent has the ref */
        <div className="w-4xl justify-self-center  overflow-hidden ">
          <div className="divide-y divide-gray-50">
            {activeCategory.sentences.map((s, i) => (
              <div key={i}>
                <div
                  onClick={() => handleSelectSentence(s)}
                  className="p-4 hover:bg-gray-50 cursor-pointer flex items-center group transition-colors"
                >
                  <span className="text-gray-400 mr-2 whitespace-nowrap"> 
                    {activeCategory.label} 
                  </span> 
                  <span className="text-black font-normal">
                    {s.replace(activeCategory.label, "").trim()} 
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}