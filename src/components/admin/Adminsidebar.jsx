import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillBuildingFill,
  BsTagsFill,
  BsPeopleFill,
  BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/restaurants">
            <BsFillBuildingFill className='icon' /> All Restaurants
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/AllOfers">
            <BsTagsFill className='icon' /> All Offers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/users">
            <BsPeopleFill className='icon' /> All Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings">
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
