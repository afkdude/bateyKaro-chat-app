import React from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
function MainContainer() {
  return (
    <div className='bg-[#F4F5F8] h-[90vh] w-[90vw] rounded-[20px]  flex  '>
      <Sidebar />
      <WorkArea/>
    </div>
  )
}

export default MainContainer