import React from 'react';

function MoreApp() {
  return (
    <section className='more_app'>
      <h2 className='blind'>앱 더보기</h2>
      <ul>
        <li>
          <b><span className='app_icon'></span>Kakao Story</b>
        </li>
        <li>
          <b><span className='app_icon'></span>Path</b>
        </li>
        <li>
          <b><span className='app_icon'></span>KaKao Friends</b>
        </li>
      </ul>
    </section>
  );
}

export default MoreApp;