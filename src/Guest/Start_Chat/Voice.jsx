import { useState } from "react";
import Button from "../../components/Button";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Voice() {
  const voices = [
    { name: "Maple", description: "Cheerful and candid" },
    { name: "Juniper", description: "Open and upbeat" },
    { name: "Breeze", description: "Animated and earnest" },
    { name: "Cove", description: "Composed and direct" },
    { name: "Spruce", description: "Calm and affirming" },
    { name: "Sol", description: "Savvy and relaxed" },
    { name: "Vale", description: "Bright and inquistive" },
    { name: "Ember", description: "Confident and optimistic" },
    { name: "Arbor", description: "Easygoing and versatile" },
  ];

  const [index, setIndex] = useState(1);

  // Looping logic: (index + 1) % length
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % voices.length);
  };

  // Looping logic: (index - 1 + length) % length
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + voices.length) % voices.length);
  };

  // Helper to get neighbor indices for looping
  const prevIdx = (index - 1 + voices.length) % voices.length;
  const nextIdx = (index + 1) % voices.length;

  //  const navigate = useNavigate();
  // // const handleHome = () =>{
  //   navigate("/")
  // }

  return (
    <>
      <div className="scale-80 flex justify-center flex-col items-center">
        <div className="text-3xl text-black font-semibold">
          Try voice mode for free
        </div>
        <div className="h-55 mb-5">
          <div className="mt-10 w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src="./src/assets/images.jpg"
              alt="voice"
              className="h-full w-full object-cover animate-[pulse_2s_ease-in-out_infinite_500ms]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-40 select-none">

          {/* 1. LEFT PREVIEW (Fixed Width) */}
          <div className="w-64 flex flex-col items-center justify-center opacity-60 transition-all duration-500">
            <p className="text-2xl font-bold text-gray-500 truncate w-full text-center">
              {voices[prevIdx].name}
            </p>
            <p className="text-sm text-gray-400 truncate w-full text-center">
              {voices[prevIdx].description}
            </p>
          </div>

          {/* 2. FIXED NAVIGATION ARROW (Left) */}
          <div className="w-12 flex justify-center">
            <button
              onClick={handlePrev}
              className="text-2xl font-bold hover:scale-110 transition-transform cursor-pointer"
            >
              <LiaAngleLeftSolid />
            </button>
          </div>

          {/* 3. CENTER ACTIVE AREA (Fixed Width) */}
          <div className="w-80 flex flex-col items-center text-center px-4">
            <p className="text-3xl font-bold text-black min-h-10 flex items-center">
              {voices[index].name}
            </p>
            <p className="text-lg text-gray-800 min-h-10">
              {voices[index].description}
            </p>
          </div>

          {/* 4. FIXED NAVIGATION ARROW (Right) */}
          <div className="w-12 flex justify-center">
            <button
              onClick={handleNext}
              className="text-2xl font-bold hover:scale-110 transition-transform cursor-pointer"
            >
              <LiaAngleRightSolid />
            </button>
          </div>

          {/* 5. RIGHT PREVIEW (Fixed Width) */}
          <div className="w-64 flex flex-col items-center justify-center opacity-60 transition-all duration-500">
            <p className="text-2xl font-bold text-gray-500 truncate w-full text-center">
              {voices[nextIdx].name}
            </p>
            <p className="text-sm text-gray-400 truncate w-full text-center">
              {voices[nextIdx].description}
            </p>
          </div>

        </div>

        <div className="mt-15">
          <Link to="/Login">
            {" "}
            <Button
              variant="primary"
              className="w-60 h-15 rounded-4xl mb-1 font-semibold"
            >
              Login
            </Button>
          </Link>
        </div>
        <Link to="/">
          {" "}
          <Button
            // onClick={handleHome}
            variant="secondary1"
            className="w-60 h-15 rounded-4xl border-none font-semibold"
          >
            Back to chat
          </Button>
        </Link>
      </div>
    </>
  );
}
