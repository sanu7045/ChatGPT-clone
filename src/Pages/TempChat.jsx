import { useState } from "react";
import SearchChats from "../Authenticated/Search_Chat/SearchChats"
import Hero2 from "../Authenticated/Search_Chat/Hero2";
import Footer from "../components/Footer";
import TempHeader from "../Authenticated/Search_Chat/TempHeader";
import Library from "../Authenticated/Library/Library";
import { Toaster } from "sonner";
import { useLocation } from "react-router-dom";

function TempChat() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState(location.state?.view || "search");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">

      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-65 h-full bg-white z-50 border-r shadow-xl">
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
      <Toaster 
        position="top-center" 
        style={{ marginLeft: isSidebarOpen ? '140px' : '0px', transition: 'margin-left 0.3s ease' }} 
      />
    </div>
  )
}

export default TempChat