import React from 'react';
import personImage from '../data/personImage.json';

function ChatList({ num, name, email }) {
  return (
    <>
      <span className='chats_img empty'>
        <img src={personImage[num].img} alt={name} />
      </span>
      <span className='chats_cont'>
        <span className='chats_name'>{name}</span>
        <span className='chats_latest'>{personImage[num].message}</span>
      </span>
      <span className='chats_time'>
        <span>15</span>:<span>33</span>
      </span>
    </>
  );
}

export default ChatList;