/* eslint-disable no-unused-vars */
import React from 'react'
import './RightSidebar.css'
import prImage from '../../assets/profil-image.jpg'
import pointvert from '../../assets/icons8-point-final-50.png'
import photo from '../../assets/image-s.jpg'

const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="profile">
        <img src={prImage} alt="" />
        <h3>Rafael Ange <img  className="dot" src={pointvert} alt="" /> </h3>
         <p>j ai téléchargé chatApp pour causer avec toi</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src= {photo } alt="" />
          <img src= {photo} alt="" />
          <img src= {photo } alt="" />
          <img src= {photo } alt="" />
          <img src= {photo } alt="" />
          <img src= {photo } alt="" />
        </div>
      </div>
      <button>Déconnecter</button>
    </div>
  )
}

export default RightSideBar
