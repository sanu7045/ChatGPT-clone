import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { PiCopyLight, PiPencilSimpleLine } from "react-icons/pi";
import useContentLookup from "../../hooks/useContentLookup.js";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import Navbar from "../../components/Header.jsx";
import Hero1 from "../../components/Hero1.jsx";
import FollowUpQuestions from "../../components/FollowUpQuestions.jsx";
import PromptHeader from "./PromptHeader.jsx";
import SmarterResponses from "./smarterResponses.jsx";
import Message from "./Message.jsx";
import { AiOutlineLike, AiOutlineDislike, AiOutlineSound } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";

export default function StreamDisplay({ toggleSidebar, isSidebarOpen }) {
  const { promptKey } = useParams();
  const decodedKey = decodeURIComponent(promptKey);

  const matchingContent = useContentLookup(decodedKey);
  const isHiPrompt = decodedKey.replace(/^['"]|['"]$/g, "").trim().toLowerCase() === "hi";
  const contentToRender = matchingContent || "Response not found.";

  const [chatHistory, setChatHistory] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [followUpText, setFollowUpText] = useState("");
  const [inputValue, setInputValue] = useState(""); // Shared state for Hero1's input box

  const [displayedText, setDisplayedText] = useState("");
  const [prevPrompt, setPrevPrompt] = useState(decodedKey);

  const bottomRef = useRef(null);

  if (decodedKey !== prevPrompt) {
    setPrevPrompt(decodedKey);
    setIsDone(false);
    setDisplayedText("");
    setInputValue(""); // Clear the input box when navigating to a new streaming page
  }

  // Appending to chatHistory when promptKey changes
  useEffect(() => {
    setChatHistory((prev) => {
      if (prev.length > 0 && prev[prev.length - 1].prompt === decodedKey) {
        return prev;
      }
      return [
        ...prev,
        { prompt: decodedKey, content: contentToRender }
      ];
    });
  }, [decodedKey, contentToRender]);

  // Custom streaming effect
  useEffect(() => {
    if (isDone) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(contentToRender.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= contentToRender.length) {
        clearInterval(interval);
        setIsDone(true);
      }

    }, 15); // Increased to 15ms interval for slightly smoother text feeling

    return () => clearInterval(interval);
  }, [decodedKey, contentToRender, isDone]);

  // Auto-scroll when text updates, since DOM is ready here
  useEffect(() => {
    if (isDone) return;
    const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 350;
    if (isNearBottom) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "auto" });
    }
  }, [displayedText, isDone]);

  useEffect(() => {
    if (isDone) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatHistory, isDone]);

  const { copied, copy: handleCopy } = useCopyToClipboard();

  return (
    <>
      <Navbar />
      <div className="-translate-y-15 scale-75 p-5 w-full max-w-6xl justify-self-center mx-auto pb-[50vh]">
        {chatHistory.map((chat, index) => {
          const isLatest = index === chatHistory.length - 1;
          const textToShow = isLatest ? displayedText : chat.content;
          const showDoneFeatures = !isLatest || isDone;
          const isCurrentHi = chat.prompt.replace(/^['"]|['"]$/g, "").trim().toLowerCase() === "hi";

          return (
            <div key={index} className="mb-12">
              <PromptHeader sentence={chat.prompt} />

              <div className="relative leading-relaxed mt-5 space-y-5 tracking-wide text-gray-900 font-sans text-lg p-4 scroll-smooth">
                <span>{textToShow}</span>
                {isLatest && !isDone && <span className="animate-pulse text-black">|</span>}

                {/* Follow-up question that cycles on each click */}
                {showDoneFeatures && !isCurrentHi && (
                  <FollowUpQuestions
                    promptKey={chat.prompt}
                    onQuestionReady={setFollowUpText}
                    onSelect={(question) => setInputValue(question)} // When clicked, copy question to input!
                  />
                )}

                <div className="flex flex-col">
                  {/* The buttons will only render when isDone is true */}
                  {showDoneFeatures && (
                    <div className="flex items-center gap-5 mt-5">
                      <div
                        onClick={() => handleCopy(followUpText)}
                        className="flex items-center gap-3 text-sm transition-all duration-500 text-black hover:opacity-100"
                      >
                        {copied ? <span>copied</span> : <PiCopyLight className="text-xl text-black" />}
                      </div>
                      <AiOutlineLike className="text-xl" />
                      <AiOutlineDislike className="text-xl" />
                      <AiOutlineSound className="text-xl" />
                      <button onClick={toggleSidebar} className="hover:opacity-100 flex gap-3">
                        <PiPencilSimpleLine className="text-xl" />
                      </button>
                      <span className="flex items-center gap-1">
                        <FiRefreshCw className="text-xl" />
                        <GoChevronDown className="text-xl" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!isSidebarOpen && (
        <div className="fixed translate-y-4 bottom-0 w-full flex-col flex items-center justify-center z-1 bg-white">
          {isDone && (
            <div className="w-4xl flex justify-center ">
              {isHiPrompt ? <Message /> : <SmarterResponses />}
            </div>
          )}
          <div className="w-full max-w-5xl flex justify-center">
            <Hero1 inputValue={inputValue} setInputValue={setInputValue} />
          </div>
        </div>
      )}
    </>
  );
}
