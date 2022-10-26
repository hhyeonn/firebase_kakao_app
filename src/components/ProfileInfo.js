import React from 'react';
import { FaComment, FaPencilAlt } from 'react-icons/fa';

function ProfileInfo() {
  return (
    <main className='ProfileInfo'>
      <section className='background'>
        <h2 className='blind'>My profile background image</h2>
      </section>
      <section className='profile'>
        <h2 className='blind'>My profile info</h2>
        <div className='my_profile_img empty'></div>
        <div className='profile_cont'>
          <span className='profile_name'>My Name</span>
          <input type='email' className='profile_email' placeholder='UserID@email.com' />
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
  );
}

export default ProfileInfo;