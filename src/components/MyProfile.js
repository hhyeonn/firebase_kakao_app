import React from 'react';
import { Link } from 'react-router-dom';


function MyProfile() {
  return (
    <>
      <header>
        <h2>My Profile</h2>
      </header>
      <ul>
        <li>
          <Link to='/myprofile'>
            <div>
              <span className='profile_img empty'></span>
              <span className='profile_name'>My Name</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MyProfile;