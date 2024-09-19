/* eslint-disable no-unused-vars */
import React from 'react'
import './ProfileUpdate.css'

const ProfileUpdate = () => {
  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <label htmlFor="avatar">
            <input type="file" id='avatar' accept='png, jpg, jpeg' hidden />
            <img src="" alt="" />
            Télécharger une image de profil
          </label>
          <input type="text" placeholder='votre nom' required />
          <textarea placeholder='modifier to profil' required></textarea>
        </form>
      </div>
    </div>
  )
}

export default ProfileUpdate