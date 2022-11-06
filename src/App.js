import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService } from './fbase';
import { onAuthStateChanged } from "firebase/auth";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGoogle, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome, faGoogle, faGithub);

// import Auth from './routes/Auth';
// import Friends from './routes/Friends';
// import Chats from './routes/Chats';
// import Find from './routes/Find';
// import More from './routes/More';
// import Chatting from './routes/Chatting';
// import MyProfile from './routes/MyProfile';
// import FriendsProfile from './routes/FriendsProfile';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null); //로그인한 사용자 정보

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // User is signed in 로그인 정보가 있으면 true
        setIsLoggedIn(user);
        setUserObj(user);
      } else { //사용자 정보가 없는 경우
        // User is signed out 로그인 정보가 없으면 로그아웃(false)
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);

  return (
    <>{init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : 'initializing...'}</>


    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    //   <Routes>
    //     <Route path='/' element={<Auth />} />
    //     <Route path='/Friends' element={<Friends />} />
    //     <Route path='/chats' element={<Chats />} />
    //     <Route path='/find' element={<Find />} />
    //     <Route path='/more' element={<More />} />
    //     <Route path='/chatting' element={<Chatting />} />
    //     <Route path='/myprofile' element={<MyProfile />} />
    //     <Route path='/friendsprofile' element={<FriendsProfile />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
