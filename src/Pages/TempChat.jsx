import { useState } from "react";
import SearchChats from "../Search_Chat/SearchChats"
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Library from "./Library";
import TempHeader from "../Search_Chat/TempHeader";

function TempChat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("search");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">

      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-70 h-full bg-white z-50 border-r shadow-xl">
          <SearchChats toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setCurrentView={setCurrentView} />
        </div>
      )}

      <div className="flex flex-col h-full">
        {currentView === "search" ? (
          <>
            <TempHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            <div className=" -translate-y-10 ">
              <Hero2 toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </div>

            <Footer showMessage={false} />
          </>
        ) : (
          <Library toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        )}
      </div>
    </div>
  )
}

export default TempChat