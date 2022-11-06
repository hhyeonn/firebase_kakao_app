import React, { useEffect, useState } from 'react';
import { authService } from '../fbase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthForm from '../components/AuthForm';
import "../styles/auth.scss";

/* 로그인 화면 */
function Auth() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);

  const onSocialClick = (e) => {
    const {target: {name}} = e;
    let provider;
    if(name === "google"){
      provider = new GoogleAuthProvider();
    }
    const data = signInWithPopup(authService, provider);
  };


  return (
    <div className='auth'>
      <div className='header'>
        <ul>
          <li>
          <FontAwesomeIcon icon='fa-solid fa-gear' size='2x'/>
          </li>
          <li>
          <FontAwesomeIcon icon='fa-solid fa-xmark' size='2x'/>
          </li>
        </ul>
      </div>

      <div className='logo'>
        <RiKakaoTalkFill className='icon' />
      </div>
      
    <AuthForm />
    <div className="authContainer">
        <div className="authBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">
              Continue with Google <FontAwesomeIcon icon="fa-brands fa-google" />
            </button>
        </div>
    </div>
    </div>
  )
}

export default Auth