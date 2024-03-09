// import UserMenu from './UserMenu';
// import PageMenu from './PageMenu';
import { NavData } from './NavData';
import React from 'react';
import WebFont from 'webfontloader';
import './WelcomePage.css'; // Import the CSS for styling
import styles from './sidenav.module.css'; // Import the CSS for styling
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const panelStyles = {
    padding: '15px 20px',
    color: '#aaa'
  };
  
const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: '#34c3ff',
    color: ' #fff'
};

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* <PageMenu rightAligned={false}/>
          <a href="/dashboard" className="logo">
            <div className="user-info">
              <h2 className="h2-title">PizzaMind</h2>
            </div>
          </a> */}
      </div>
    </header>
  );
};

export default Header;