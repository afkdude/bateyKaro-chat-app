import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
function MainContainer() {
    const [conversation, setConversation] = useState([
      {
        name: "Shubham",
        lastMessage: "kal milte ha ",
        timeStamp: "today",
      },
      {
        name: "Divyanshu",
        lastMessage: " hello  ",
        timeStamp: "yesterday",
      },
      {
        name: "Mummy",
        lastMessage: "order recieve karlen ",
        timeStamp: "3:56",
      },
      {
        name: "Papa",
        lastMessage: "Kaise ho?",
        timeStamp: "2 days ago",
      },
      {
        name: "Friend 1",
        lastMessage: "Hey, what's up?",
        timeStamp: "3 days ago",
      },
      {
        name: "Friend 2",
        lastMessage: "Can we meet tomorrow?",
        timeStamp: "4 days ago",
      },
      {
        name: "Colleague",
        lastMessage: "Regarding the project...",
        timeStamp: "5 days ago",
      },
      {
        name: "Boss",
        lastMessage: "Meeting scheduled for 10 AM",
        timeStamp: "6 days ago",
      },
      {
        name: "Client",
        lastMessage: "Payment confirmation",
        timeStamp: "1 week ago",
      },
      {
        name: "Delivery Partner",
        lastMessage: "Your order is out for delivery",
        timeStamp: "2 weeks ago",
      },
    ]);
  return (
    <div className='bg-[#F4F5F8] h-[90vh] w-[90vw] rounded-[20px]  flex  '>
      <Sidebar />
      <CreateGroups/>
      {/* <Welcome/> */}
      {/* <ChatArea details={conversation} /> */}
    </div>
  )
}

export default MainContainer