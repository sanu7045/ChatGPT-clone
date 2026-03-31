import LibHeader from "../Library/LibHeader";
import Images from "../Library/Images";

function Library({ toggleSidebar, isSidebarOpen }) {
    return (
        <>
            <LibHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <Images toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </>
    )
}

export default Library