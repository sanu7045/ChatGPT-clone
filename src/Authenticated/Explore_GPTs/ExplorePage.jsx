import Header from './Header'
import GptMain from './GptMain'
import Footer from '../../components/Footer'

function ExplorePage({ toggleSidebar, isSidebarOpen,  }) {
    return (
        <>
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className={`scale-90 overflow-y-auto no-scrollbar overflow-x-hidden h-screen ${isSidebarOpen ? '-ml-10' : 'pl-0'}`} >
                <GptMain isSidebarOpen={isSidebarOpen} />
            </div>
               <Footer showMessage={false} />

        </>
    )
}

export default ExplorePage