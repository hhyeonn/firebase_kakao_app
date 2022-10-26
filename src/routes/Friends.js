import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import { FaCog } from 'react-icons/fa';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import '../styles/Friends.scss';

function Friends() {
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
      <Header className={'friends'} heading={'Friends'} leftItem={'Manage'} rightItem={<FaCog className='icon' />} />
      <SearchBox />
      <main>
        <section className='main_section'>
          <UserProfile />
        </section>
        <section className='main_section'>
          <header>
            <h2>Friends</h2>
          </header>
          <ul>
            {profiles.map((profile, idx) => (
              <li>
                <Profile num={idx} name={profile.name} email={profile.email} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <TabBar />
    </>
  );
}

export default Friends;