/* eslint-disable no-unused-vars */
import React from 'react'
import './LeftSidebar.css'
import iconChat from '../../assets/iconChat.png'
import profilimage from '../../assets/profil-image.jpg'
import rearch from '../../assets/icons8-search-50.png'
import menu from '../../assets/icons8-menu-32.png'

const LeftSideBar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={iconChat} className='logo' alt="" />
          <h2>chatApp</h2>
          <div className="menu">
            <img src={menu} alt="" />
          </div>
        </div>
        <div className="ls-rearch">
          <img src={rearch} alt="" />
          <input type="text" placeholder='recherche'/>
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item,index) => (
          <div  key={index} className="friends">
          <img src={profilimage} alt="" />
          <div>
            <p>Rafael ange</p>
            <span>comment vas tu?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar