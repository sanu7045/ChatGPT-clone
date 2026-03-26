import { useEffect } from "react";


export default function useGlobalClick(target, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (typeof target === "string") {
        // Selector-based: click is "outside" if it didn't land on a matching element
        if (!event.target.closest(target)) {
          onOutsideClick(event);
        }
      } else {
        // Ref-based: click is "outside" if it didn't land inside ref.current
        if (target.current && !target.current.contains(event.target)) {
          onOutsideClick(event);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [target, onOutsideClick]);
}
