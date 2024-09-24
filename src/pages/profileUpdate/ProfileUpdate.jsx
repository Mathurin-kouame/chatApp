/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ProfileUpdate.css'
import imgLogo from '../../assets/iconChat.png'
import profil from '../../assets/icons8-test-account-24.png'

const ProfileUpdate = () => {

  const [ image, setImage ] = useState(false);

  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <h3>Détail du profil</h3>
          <label htmlFor="avatar">
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='avatar' accept='png, jpg, jpeg' hidden />
            <img src={image? URL.createObjectURL(image): profil} alt="" />
            Télécharger une image de profil
          </label>
          <input type="text" placeholder='votre nom' required />
          <textarea placeholder='modifier mon profil' required></textarea>
          <button>Enregistrer</button>
        </form>
        <img className='profil-pic' src={ image? URL.createObjectURL(image): imgLogo} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate