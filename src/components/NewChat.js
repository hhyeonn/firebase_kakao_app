import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '../fbase';
import { doc, deleteDoc } from 'firebase/firestore';

function NewChat({chatObj, isOwner}) {
    const [nowDate, setNowDate] = useState(chatObj.createAt);

    useEffect(() => {
        let timeStamp = chatObj.createAt;
        const now = new Date(timeStamp);

        setNowDate(now.toLocaleTimeString());
    },[]);

    /* onDeleteClick 데이터 삭제 */
    const onDeleteClick = async () => {
    const ok = window.confirm('삭제하시겠습니까?');
    if (ok) {
      const data = await deleteDoc(doc(db, 'chats', `/${chatObj.id}`));
      if (chatObj.attachmentUrl !== '') {
        const deleteRef = ref(storage, chatObj.attachmentUrl);

        await deleteObject(deleteRef);
      }
    }
  };

  return (
    <>
    {chatObj.attachmentUrl && <img className='attach-photo' src={chatObj.attachmentUrl} alt='' />}
    {(chatObj.text || chatObj.attachmentUrl) && (
        <>
            {chatObj.text && <span className='chat'>{chatObj.text}</span>}
            <span className='newChat_time'>
                {isOwner && (
                    <FontAwesomeIcon className='icon' onClick={onDeleteClick} icon='fa-solid fa-trash' />
                )}
                {nowDate}
            </span>
        </>
    )}
    </>
  );
}

export default NewChat