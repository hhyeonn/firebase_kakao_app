import React, { useState, useEffect } from 'react';
import FloatingBtn from '../components/FloatingBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import TabBar from '../components/TabBar';
import Header from '../components/Header';
import { FaCog } from 'react-icons/fa';
import ChatList from '../components/ChatList';
import '../styles/Chats.scss';

function Chats() {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    setProfiles(data);
  };

  useEffect(() => {
    getProfiles();
  }, []);
  
  return (
    <>
      <Header className={'chats'} heading={'Chats'} leftItem={'Edit'} rightItem={<FaCog className='icon' />} />
      <SearchBox />
      <main>
        <section className='chats_section'>
          <header className='blind'>
            <h1>Chats</h1>
          </header>
          <ul>
            <Link to='/chatting'>
              {profiles.map((profile, idx) => (
                <li>
                  <ChatList num={idx} name={profile.name} email={profile.email} />
                </li>
              ))}
            </Link>
          </ul>
        </section>
      </main>
      <FloatingBtn className='chat_fa_btn' />
      <TabBar />
    </>
  );
}

export default Chats;