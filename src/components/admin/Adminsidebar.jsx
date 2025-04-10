import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillBuildingFill,
  BsTagsFill,
  BsPeopleFill,
  BsFillGearFill
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/admin/restaurants">
            <BsFillBuildingFill className='icon' /> All Restaurants
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/admin/alloffers">
            <BsTagsFill className='icon' /> All Offers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/allusers">
            <BsPeopleFill className='icon' /> All Customers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
