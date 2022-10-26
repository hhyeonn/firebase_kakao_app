import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaComment, FaSearch, FaEllipsisH } from 'react-icons/fa';

function TabBar() {
  return (
    <div className='tab_bar'>
      <ul>
        <li>
          <NavLink end to='/' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaUserAlt className='tab_bar_icon' />
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink to='/chats' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaComment className='tab_bar_icon' />
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink to='/find' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaSearch className='tab_bar_icon' />
            Find
          </NavLink>
        </li>
        <li>
          <NavLink to='/more' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaEllipsisH className='tab_bar_icon' />
            More
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TabBar;