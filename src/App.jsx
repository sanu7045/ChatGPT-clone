import "./App.css";
import "./index.css";
import TempChat from "./Pages/TempChat";
import SharePage from "./Authenticated/Library/SharePage";
import { Routes, Route } from "react-router-dom";
import ProcessedImage from "./Authenticated/Library/ProcessedImage";
import LoadingImage from "./hooks/useLoadingImage";

function App() {

  return (
    <>
   
    <Routes>
      <Route path="/" element={<TempChat />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
{/* <ProcessedImage/> */}
{/* <LoadingImage/> */}
     </>
  );
}

export default App;
