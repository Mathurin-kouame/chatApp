/* eslint-disable no-unused-vars */
import React from 'react'
import './ChatBox.css'
import profilImage from '../../assets/profil-image.jpg'
import imgHelp from '../../assets/icons8-info-128.png'
import pointVert from '../../assets/icons8-point-final-50.png'
import galery from '../../assets/icons8-galery-64.png'
import send from '../../assets/icons8-envoyer-48.png'
import sendImage from '../../assets/2044263_magnifying glass_search_icon.png'
import photo from '../../assets/image-s.jpg'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={profilImage} alt="" />
        <p>Rafael ange <img className='dot' src={pointVert} alt="" /></p>
        <img src={imgHelp} alt="" className='help' />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
         <p className='msg'>Bonsoir comment vous aller</p>
          <div>
            <img  src={profilImage} alt="" />
            <p>14:18</p>
          </div>
        </div>
        <div className="s-msg">
          <img className='msg-img' src={photo} alt="" />
          <div>
            <img src={profilImage} alt="" />
            <p>14:18</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">message ecrire par john</p>
          <div>
            <img src={profilImage} alt="" />
            <p>14:18</p>
          </div>
        </div>        
        <div className="r-msg">
          <p className="msg">message ecrire par john</p>
          <div>
            <img src={profilImage} alt="" />
            <p>14:18</p>
          </div>
        </div>        
    </div>

      <div className="chat-input">
        <input type="text" placeholder='envoyé un message' />
        <input type="file" id='image' accept='image/png, image/jpg' hidden />
        <label htmlFor="image">
          <img src={galery} alt="" />
        </label>
        <img src={send} alt="" />
      </div>
    </div>
  )
}

export default ChatBox