import React from 'react';
import { Link } from 'react-router-dom';
import myinfo from '../data/myinfo.json';


function MyProfile({userObj}) {
  //console.log(userObj);

  return (
    <>
      <header>
        <h2>My Profile</h2>
      </header>
      <ul>
        <li>
          <Link to='/myprofile'>
            <div>
              <span className='profile_img empty'>
                {/* <img src={userObj.photoURL} className='icon photo' alt='' /> */}
              </span>
              <span className='profile_name'>My Name</span>
              {/* {userObj.displayName ? `${userObj.displayName}` : 'User'} */}
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MyProfile;