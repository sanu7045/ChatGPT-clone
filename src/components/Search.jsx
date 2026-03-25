import { useState, useMemo } from "react";
import responseData from "../data/response.json";
import Card from "./Card";
import { GoSearch } from "react-icons/go";
import Input from "./Input";
import { RxCross2 } from "react-icons/rx";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoChatbubbleOutline } from "react-icons/io5";

function Search({ onClose }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [chatHistory] = useState(() => {
    const storedHistory = localStorage.getItem("chatHistory");
    if (storedHistory) {
      return JSON.parse(storedHistory);
    }
    const initialHistory = Object.keys(responseData);
    localStorage.setItem("chatHistory", JSON.stringify(initialHistory));
    return initialHistory;
  });

  const filteredHistory = useMemo(() => {
    return chatHistory.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [chatHistory, searchTerm]);

  function handleNewChat() {
    navigate("/TempChat");
  }

  function handleChatClick(sentence) {
    // Navigate to chat or handle click
    navigate(`/display/${encodeURIComponent(sentence)}`);
    onClose();
  }

  return (
    <div className="scale-90 absolute translate-x-75 flex top-24 items-center justify-center z-50">
      <Card className="scale-80 w-full rounded-3xl bg-white flex flex-col max-h-[80vh] overflow-hidden relative">
        <div className="p-4 pb-0">
          <div className="flex items-center gap-3">
            <GoSearch className="text-3xl font-bold shrink-0 -mr-3" />
            <Input
              className="flex-1 border-none focus-visible:ring-0"
              placeholder="Search chats.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div
              className="flex items-center justify-center cursor-pointer bg-gray-50 rounded-lg p-1"
              onClick={onClose}
            >
              <RxCross2 className="text-xl font-bold" />
            </div>
          </div>
          <hr className="border-gray-200 mt-4 mb-2" />
        </div>

        <div className="flex-1 px-4 pb-4">
          <div
            onClick={() => {
              handleNewChat();
              onClose();
            }}
            className="flex items-center gap-2 text-black cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
          >
            <span className="text-xl">
              <PiPencilSimpleLineLight />
            </span>
            <p>New chat</p>
          </div>

          <div className="mt-2 flex flex-col gap-1 overflow-y-auto no-scrollbar max-h-[calc(130vh-450px)] pb-[40vh] ">
            {filteredHistory.map((sentence, index) => (
              <div
                key={index}
                onClick={() => handleChatClick(sentence)}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors group "
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <IoChatbubbleOutline className="text-gray-500 text-sm" />
                </div>
                <p className="text-lg font-normal text-gray-700 truncate flex-1">
                  {sentence}
                </p>
              </div>
            ))}
            {filteredHistory.length === 0 && (
              <p className="text-center text-gray-400 py-10">No results found</p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Search