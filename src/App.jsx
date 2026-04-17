import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Guest/Start_Chat/Login";
import Voice from "./Guest/Start_Chat/Voice";
import StreamDisplay from "./Guest/Chat/StreamDisplay";
import SideBar from "./Guest/Chat/SideBar";
import { Routes, Route } from "react-router-dom";
import SearchChats from "./components/SearchChats";
import TempNavbar from "./components/TempNavbar";
import Navbar from "./components/Header";
import TempChat from "./Pages/TempChat";
import Hero2 from "./components/Hero2";
import Search from "./components/Search";
import Upgrade from "./components/Upgrade";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Home inputValue={inputValue} setInputValue={setInputValue} />
              }
            />
            <Route
              path="/display/:promptKey"
              element={<StreamDisplay toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Voice" element={<Voice />} />
          </Routes>
        </div>
      </div>
      {/* <SearchChats /> */}
      {/* <Search /> */}

      {/* <TempChat /> */}
      {/* <Upgrade /> */}
      {/* <Home/> */}
    </>
  );
}

export default App;
