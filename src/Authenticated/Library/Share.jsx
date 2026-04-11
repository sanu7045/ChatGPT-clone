import React from 'react'
import TempHeader from '../Search_Chat/TempHeader'

function Share({ toggleSidebar, isSidebarOpen }) {
  return (
    <>
      <TempHeader showUpgrade={false} showTemp={false} showShare={true} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </>
  )
}

export default Share