/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login.css'
import iconChat from '../../assets/iconChat.png'
import { signup } from '../../config/firebase'


const Login = () => {
  const [ currState, setCurrState ] = useState("Inscription");
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefaut();
    if (currState === "Inscription") {
      signup(username, email, password);
      
    }
  }

  return (
    <div className='login'>
      <h1>ChatApp</h1>
      <img src={iconChat} alt="" className='iconChat' />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        { currState === "Inscription"? <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='Nom utilisateur' className='form-input' required />: null}
        <input onChange={(e) =>setEmail(e.target.value)} value={email} type="email" placeholder='Adresse mail' className='form-input' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='votre mot de passe' className='form-input' />
        <button type='submit'>{currState === "Inscription"?"créer un compte":"Se connecter"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Accepter les conditions d utilisation et la politique de confidentialité.</p>
        </div>
        <div className="login-forgot">
          {currState === "Inscription"
            ?<p className="login-toggle">Si vous  avez un compte <span onClick={() =>setCurrState("Connexion")}>connectez-vous ici</span></p>
            :<p className="login-toggle">créer un compte <span onClick={() =>setCurrState("Inscription")}>cliquer ici</span></p>
          
          }
        </div>
      </form>
    </div>
  )
}

export default Login