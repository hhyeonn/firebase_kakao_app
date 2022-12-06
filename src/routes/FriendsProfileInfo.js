import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaTimes, FaComment, FaPencilAlt } from 'react-icons/fa';
import Header from '../components/Header';
import personImage from '../data/personImage.json';
import '../styles/MyProfile.scss';

function FriendsProfileInfo() {
  const location = useLocation();
  console.log(location);
  const { id, name, email } = location.state;

  return (
    <div className='MyProfile'>
      <Header className={'myProfile'}
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
              backgroundImage: `url(${personImage[id - 1].background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
            }}></div>
        </section>
        <section className='profile'>
          <h2 className='blind'>My profile info</h2>
          <div className='my_profile_img empty'>
            <img src={personImage[id - 1].img} alt={name} />
          </div>
          <div className='profile_cont'>
            <span className='profile_name'>{name}</span>
            <span>{email}</span>
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

export default FriendsProfileInfo;
