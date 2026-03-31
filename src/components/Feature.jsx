import { useState, useRef, useCallback } from "react";
import useGlobalClick from "../hooks/useGlobalClick";
import Features from "../Guest/Start_Chat/Features";

export default function Feature() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  const featuresRef = useRef(null);

  useGlobalClick(featuresRef, useCallback(() => setIsFeaturesOpen(false), []));
  return (
    <div ref={featuresRef}>
      {isFeaturesOpen && <Features />}

    </div>
  )
}
