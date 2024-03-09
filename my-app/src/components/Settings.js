import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import SideNav from './SideNav';
import WebFont from 'webfontloader';
import { Link, useNavigate } from 'react-router-dom';
import NearYou from './NearYou';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const Settings = () => {
    const navigate = useNavigate();
    return (
        <div>
            Settings
        </div>
    );
};

export default Settings;