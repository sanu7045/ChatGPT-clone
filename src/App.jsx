import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Guest/Start_Chat/Login";
import Voice from "./Guest/Start_Chat/Voice";
import StreamDisplay from "./Guest/Chat/StreamDisplay";
import SideBar from "./Guest/Chat/SideBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "sonner"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPencilVisible, setIsPencilVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <Toaster
        position="top-center"
      
      />

      <div className="flex h-screen overflow-hidden">
        {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} setIsPencilVisible={setIsPencilVisible} />}
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
              element={<StreamDisplay toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} isPencilVisible={isPencilVisible} setIsPencilVisible={setIsPencilVisible} />}
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Voice" element={<Voice />} />
          </Routes>
        </div>
      </div>
      
     {/* <SwitchModel/> */}
    </>
  );
}

export default App;
