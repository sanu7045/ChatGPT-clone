import { useState, useEffect, useRef } from "react";
import Features from "../../components/Features";

export default function Feature() {
     const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
          const featuresRef = useRef(null);
        
          // Close when clicking outside
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (featuresRef.current && !featuresRef.current.contains(event.target)) {
                setIsFeaturesOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
          }, []);
  return (
    <>
  {isFeaturesOpen && <Features />}
     
    </>
  )
}
