import React from 'react';
import { Link } from 'react-router-dom';
import myinfo from '../data/myinfo.json';

function MyProfile() {

  return (
    <>
      <header>
        <h2>My Profile</h2>
      </header>
      <ul>
        <li>
          <Link to='/profile'>
            <div>
              <span className='profile_img empty'>
                <img src={myinfo[0].img} alt={myinfo[0].name} />
              </span>
              <span className='profile_name'>{myinfo[0].name}</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MyProfile;