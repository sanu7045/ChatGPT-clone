import "./App.css";
import "./index.css";
import TempChat from "./Pages/TempChat";
import SharePage from "./Authenticated/Library/SharePage";
import { Routes, Route } from "react-router-dom";
import DownloadPage from "./Authenticated/Library/DownloadPage";
import Library from "./Authenticated/Library/Library";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<TempChat />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/download" element={<DownloadPage />} />
        {/* <Route path="/library" element={<Library />} /> */}
      </Routes>

    </>
  );
}

export default App;
