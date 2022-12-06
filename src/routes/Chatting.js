import React, { useEffect, useState } from 'react';
import { FaBars, FaAngleLeft, FaPlus, FaSmile } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { addDoc, collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../fbase';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NewChat from '../components/NewChat';
import '../styles/Chatting.scss';

function Chatting({userObj}) {
  const location = useState();
  // const { id, name } = location.state;

  const [chat, setChat] = useState('');
  const [chats, setChats] = useState('');
  const [attachment, setAttachment] = useState('');

  /* onSnapshot 사용해 실시간 데이터 가져오기 */
  useEffect(() => {
    const q = query(collection(db, 'chats'), orderBy('createAt', 'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({...doc.data(), id:doc.id});
      })
      setChats(newArray);
    });
  },[]);

  /* onChange 텍스트 입력 */
  const onChange = (e) => {
    const{target: {value},} = e;
    setChat(value);
  };

  /* onAttach */
  /* 첨부 한 파일 인식 */
  const onAttach = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  /* onClearAttachment 첨부파일 초기화 */
  const onClearAttachment = () => {
    setAttachment('');
  };

  /* onSubmit send 클릭 시 */
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = '';
    if (attachment !== '') {
      console.log('attach');
      const storageRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(storageRef, attachment, 'data_url');
      console.log(response);

      attachmentUrl = await getDownloadURL(ref(storage, response.ref));
    }

    await addDoc(collection(db, 'chats'), {
      text: chat,
      createAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl,
    });
    setChat('');
    setAttachment('');
    console.log('submit ok');
  };


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

        <div className='chat_box my'>
          <span className='chat'>Hello!</span>
          <span className='chat'>Hello! This is a test message.</span>
          <span className='chat'>This is a test message.</span>
          <span className='chat_time'>
            <span>12</span>:<span>30</span>
          </span>
        </div>

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

        <div className='chat_box my new'>
          {chat && chats.map((chat) => <NewChat chatObj={chat} isOwner={chat.createId === userObj.uid} />)}
        </div>
      </main>

      <footer>
        <span className='plus_btn'>
          <FaPlus className='icon' />
        </span>
        <form onSubmit={onSubmit}>
          <fieldset className='text_box'>
            <legend className='blind'>채팅 입력창</legend>
            <label for='chatting' className='blind'>채팅 입력</label>
            <input autoFocus type='text' id='chatting' className='text_field' onChange={onChange} value={chat} />
            <span className='emoticon_btn'>
              <FaSmile className='icon' />
            </span>
            <span onClick={onSubmit} className='send_btn'>
              <BiSend className='icon' />
            </span>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Chatting;
