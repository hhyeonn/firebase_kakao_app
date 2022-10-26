import React from 'react';
import { FaBars, FaAngleLeft, FaPlus, FaSmile, FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Chatting.scss';

function Chatting() {
  return (
    <div>
      <Header
        className='Chatting'
        heading={'Friend Name'}
        leftItem={
          <Link to='/chats'>
            <FaAngleLeft className='icon' />
          </Link>
        }
        rightItem={
          <>
            <FaBars className='icon' />
          </>
        }
      />
      <main className='Chatting'>
        <span className='date_info'>Monday, October 17, 2022</span>
        {/* my */}
        <div className='chat_box my'>
          <span className='chat'>Hello!</span>
          <span className='chat'>Hello! This is a test message.</span>
          <span className='chat'>This is a test message.</span>
          <span className='chat_time'>
            <span>12</span>:<span>30</span>
          </span>
        </div>
        {/* other */}
        <div className='chat_box other'>
          <div className='other_info'>
            <span className='profile_img empty'></span>
            <span className='profile_name'>Friend Name</span>
          </div>
          <span className='chat'>And this is an answer</span>
          <span className='chat_time'>
            <span>17</span>:<span>30</span>
          </span>
        </div>
      </main>
      <footer>
        <span className='plus_btn'>
          <FaPlus className='icon' />
        </span>
        <form action='/' method='post'>
          <fieldset className='text_box'>
            <legend className='blind'>채팅 입력창</legend>
            <label for='chatting' className='blind'>채팅 입력</label>
            <input type='text' id='chatting' className='text_field' />
            <span className='emoticon_btn'>
              <FaSmile className='icon' />
            </span>
            <span className='voice_btn'>
              <FaMicrophone className='icon' />
            </span>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Chatting;