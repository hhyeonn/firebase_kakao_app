import React from 'react';
import { FaComment } from 'react-icons/fa';

function UserInfo() {
  return (
    <section className='user_info'>
      <h2 className='blind'>사용자 정보</h2>
      <span className='profile_img empty'></span>
      <span className='profile_info'>
        <span className='profile_name'>My Name</span>
        <span className='profile_email'>Userid@gmail.com</span>
      </span>
      <span className='chat_img'>
        <FaComment className='icon' />
      </span>
    </section>
  );
}

export default UserInfo;