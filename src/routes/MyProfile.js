import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTimes, FaComment, FaPencilAlt } from 'react-icons/fa';
import Header from '../components/Header';
import myinfo from '../data/myinfo.json';
import '../styles/MyProfile.scss';

function MyProfile() {
  return (
    <div className='MyProfile'>
      <Header
        className={'myProfile'}
        leftItem={
          <Link to='/'>
            <FaTimes className='icon' />
          </Link>
        }
        rightItem={<FaUser className='icon' />}
      />
     
     <main className='ProfileInfo'>
        <section className='background'>
          <h2 className='blind'>My profile background image</h2>
          <div
            style={{
              backgroundImage: `url(${myinfo[0].background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
            }}></div>
        </section>
        <section className='profile'>
          <h2 className='blind'>My profile info</h2>
          <div className='my_profile_img empty'>
            <img src={myinfo[0].img} alt={myinfo[0].name} />
          </div>
          <div className='profile_cont'>
            <span className='profile_name'>{myinfo[0].name}</span>
            <input type='email' className='profile_email' placeholder={myinfo[0].email} />
            <ul className='profile_menu'>
              <li>
                <span>
                  <FaComment className='icon' />
                </span>
                <b>My Chatroom</b>
              </li>
              <li>
                <span>
                  <FaPencilAlt className='icon' />
                </span>
                <b>Edit Profile</b>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyProfile;