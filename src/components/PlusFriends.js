import React from 'react';
import { FaUtensils, FaInfoCircle, FaHome, FaTv, FaPencilAlt, FaGraduationCap, FaUniversity, FaWonSign, FaVideo } from 'react-icons/fa';

function PlusFriends() {
  return (
    <section className='plus_friends'>
      <header>
        <h2>Plus Friends</h2>
        <span>
          <FaInfoCircle className='header_icon' />Learn More
        </span>
      </header>
      <ul className='plus_list'>
        <li>
          <FaUtensils className='icon'/>Order
        </li>
        <li>
          <FaHome className='icon'/>Store
        </li>
        <li>
          <FaTv className='icon'/>TV Channel/Radio
        </li>
        <li>
          <FaPencilAlt className='icon'/>Creation
        </li>
        <li>
          <FaGraduationCap className='icon'/>Education
        </li>
        <li>
          <FaUniversity className='icon'/>Politics/Societv
        </li>
        <li>
          <FaWonSign className='icon'/>Finance
        </li>
        <li>
          <FaVideo className='icon'/>Movies/Music
        </li>
      </ul>
    </section>
  );
}

export default PlusFriends;