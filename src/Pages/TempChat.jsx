import { useState } from "react";
import TempNavbar from "../components/TempNavbar"
import SearchChats from "../components/SearchChats"
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";

function TempChat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">

      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-70 h-full bg-white z-50 border-r shadow-xl">
          <SearchChats toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
      )}

      <div className="flex flex-col h-full">
        <TempNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div className=" -translate-y-10 ">
          <Hero2 toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>

        <Footer showMessage={false} />

      </div>
    </div>
  )
}

export default TempChat