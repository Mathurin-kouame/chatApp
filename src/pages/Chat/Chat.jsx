/* eslint-disable no-unused-vars */
import React from 'react'
import './Chat.css'
import ChatBox from '../../components/ChatBox/ChatBox'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <ChatBox />
      </div>
    </div>
  )
}

export default Chat