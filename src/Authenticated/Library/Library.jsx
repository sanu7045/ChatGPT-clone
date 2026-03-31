import LibHeader from "./LibHeader";

function Library({ toggleSidebar, isSidebarOpen }) {
    return (
        <>
            <LibHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </>
    )
}

export default Library