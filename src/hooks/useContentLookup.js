import data from "../data/response.json";
import { followUpContent } from "../data/followupsContent";

export default function useContentLookup(promptKey) {
  if (!promptKey) return "";

  const cleanKey = promptKey.replace(/^['"]|['"]$/g, "").trim();
  const isHiPrompt = cleanKey.toLowerCase() === "hi";

  if (isHiPrompt) return "Hi there! How can I help you?";

  let content = data[cleanKey];
  if (!content) {
    for (const parentKey in followUpContent) {
      if (followUpContent[parentKey][cleanKey]) {
        content = followUpContent[parentKey][cleanKey];
        break;
      }
    }
  }
  return content || "";
}
