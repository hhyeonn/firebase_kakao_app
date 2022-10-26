import React from 'react';
import '../styles/floatingBtn.scss';
import { FaComment } from 'react-icons/fa';

function FloatingBtn() {
  return (
    <div className='chat_fa_btn'>
      <span className='icon'><FaComment /></span>
    </div>
  );
}

export default FloatingBtn;