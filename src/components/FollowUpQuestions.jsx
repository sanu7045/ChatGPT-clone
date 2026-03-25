import { useState, useEffect } from "react";
import { followUpQuestions } from "../data/followups";
import { PiQuotesFill } from "react-icons/pi";


export default function FollowUpQuestions({ promptKey, onQuestionReady, onSelect, inputValue, setInputValue }) {
  const [selection, setSelection] = useState(null);
  const questions = followUpQuestions[promptKey] || followUpQuestions["default"];

  const [clickIndex, setClickIndex] = useState(0);

  const handleAction = () => {
    const activeSelection = window.getSelection();
    if (activeSelection && activeSelection.toString().trim().length > 0) {
      return;
    }

    console.log("Processing input:", inputValue);
    setClickIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setSelection(null);
    setInputValue("");
  };
  const currentQuestion = questions[clickIndex];

  // Notify parent of the current question (for copy button)
  useEffect(() => {
    if (onQuestionReady) onQuestionReady(currentQuestion);
  }, [currentQuestion, onQuestionReady]);

  // Handle text selection within this component
  const handleMouseUp = () => {
    const activeSelection = window.getSelection();
    if (!activeSelection || activeSelection.isCollapsed) {
      setSelection(null);
      return;
    }

    const text = activeSelection.toString().trim();
    if (!text) {
      setSelection(null);
      return;
    }

    // Get the bounding rectangle of the selection
    const range = activeSelection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Calculate position relative to viewport (and adjust slightly above the text)
    setSelection({
      text,
      top: rect.top - 40,
      left: rect.left + rect.width / 2,
    });
  };

  // Close the popup if user clicks elsewhere
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setTimeout(() => {
        const activeSelect = window.getSelection();
        if (!activeSelect || activeSelect.isCollapsed) {
          setSelection(null);
        }
      }, 0);
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  const handleTooltipClick = () => {
    if (selection && selection.text) {
      onSelect(`"${selection.text}"`);
      setSelection(null);
      window.getSelection().removeAllRanges(); // Clear text selection
    }
  };

  return (
    <div className="mt-8 mb-4 relative block">
      <div
        onClick={handleAction}
        onMouseUp={handleMouseUp}
        className="text-lg font-normal text-gray-900 cursor-text selection:bg-blue-200"
      >
        {currentQuestion}
      </div>

      {/* Tooltip */}
      {selection && (
        <button
          onClick={handleTooltipClick}
          onMouseDown={(e) => e.preventDefault()} // Prevents selection clearing on click
          className="fixed -translate-y-5 z-50 justify-center h-15 w-15 bg-white text-black text-2xl font-medium border-2 border-gray-200 rounded-full flex items-center cursor-pointer"
          style={{
            top: `${selection.top}px`,
            left: `${selection.left}px`,
          }}
        >
          <PiQuotesFill className="text-black" />
          <div className="absolute top-full"></div>
        </button>
      )}
    </div>
  );
}
