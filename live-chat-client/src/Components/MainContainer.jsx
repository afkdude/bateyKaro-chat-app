import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Login from './Login';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router';
function MainContainer() {
   
  return (
    <div className='bg-[#F4F5F8] h-[90vh] w-[90vw] rounded-[20px]  flex  '>
      
      
      <Sidebar />
      {/* <Users_Groups /> */}
      <Outlet/>
      {/* <CreateGroups/> */}
      {/* <Welcome/> */}
      {/* <ChatArea details={conversation} /> */}
    </div>
  )
}

export default MainContainer