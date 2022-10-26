import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chatting from './routes/Chatting';
import MyProfile from './routes/MyProfile';
import FriendsProfile from './routes/FriendsProfile';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Friends />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/find' element={<Find />} />
        <Route path='/more' element={<More />} />
        <Route path='/chatting' element={<Chatting />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/friendsprofile' element={<FriendsProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
