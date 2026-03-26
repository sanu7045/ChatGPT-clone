import { useState } from "react";
import responseData from "../data/response.json";

export default function useChatHistory() {
  const [chatHistory] = useState(() => {
    const storedHistory = localStorage.getItem("chatHistory");
    if (storedHistory) {
      return JSON.parse(storedHistory);
    }
    const initialHistory = Object.keys(responseData);
    localStorage.setItem("chatHistory", JSON.stringify(initialHistory));
    return initialHistory;
  });
  return chatHistory;
}
