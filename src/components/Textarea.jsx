import { useRef } from "react";

export default function AutoResizeInput({ placeholder }) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to calculate correctly
      textarea.style.height = "auto";
      // Set height to scrollHeight (content size)
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      rows="1"
      placeholder={placeholder}
      onInput={handleInput}
      className="w-full bg-transparent resize-none outline-none text-gray-700 
                 placeholder-gray-400 p-2 min-h-11 max-h-50 overflow-y-auto 
                 transition-[height] duration-100 ease-out"
    />
  );
}