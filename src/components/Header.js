import React from 'react';
import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from 'react-icons/fa';

function Header({ heading, leftItem, rightItem,className }) {
  return (
    <header className={className}>
      <div className='status_bar'>
        <div className='left_item'>
          <FaPlane className='icon' />
          <FaWifi className='icon' />
        </div>
        <div className='center_item'>
          <span>15</span>:<span>33</span>
        </div>
        <div className='right_item'>
          <FaMoon className='icon' />
          <FaBluetoothB className='icon' />
          <span><span>100</span>%</span>
          <FaBatteryFull className='icon' />
        </div>
      </div>
      <div className='title_bar'>
        <h1>{heading}</h1>
        <div className='left_item'>{leftItem}</div>
        <div className='right_item'>{rightItem}</div>
      </div>
    </header>
  );
}

export default Header;