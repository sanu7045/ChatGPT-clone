import "./App.css";
import "./index.css";
import TempChat from "./Pages/TempChat";
import SharePage from "./Authenticated/Library/SharePage";
import { Routes, Route } from "react-router-dom";
import DownloadPage from "./Authenticated/Library/DownloadPage";
import Library from "./Authenticated/Library/Library";
import MoreInformation from "./Authenticated/Explore_GPTs/MoreInformation";
import ExplorePage from "./Authenticated/Explore_GPTs/ExplorePage";
import MiddlePart from "./Authenticated/Explore_GPTs/MiddlePart";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<TempChat />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/information" element={<MoreInformation />} />
        <Route path="/middle" element={<MiddlePart />} />
      </Routes>



    </>
  );
}

export default App;
