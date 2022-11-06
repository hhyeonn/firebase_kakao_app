import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './routes/Auth';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import MyProfile from './routes/MyProfile';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import More from './routes/More';
import FriendsProfile from './routes/FriendsProfile';

function AppRouter({isLoggedIn, userObj}) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                {isLoggedIn ? (
                <>
                  <Route path='/' element={<Friends userObj={userObj} />} />
                </>
                ) : (
                <Route path='/' element={<Auth />} />
                )}
                <Route path='/myprofile' element={<MyProfile userObj={userObj} />} />
                <Route path='/friendsprofile' element={<FriendsProfile userObj={userObj} />} />
                <Route path='/Chats' element={<Chats />} />
                <Route path='/chatting' element={<Chatting userObj={userObj} />} />
                <Route path='/find' element={<Find />} />
                <Route path='/more' element={<More userObj={userObj} />} />
                <Route />
            </Routes>
        </BrowserRouter>
      )
}

export default AppRouter;