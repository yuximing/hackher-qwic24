import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import SideNav from './SideNav';
import WebFont from 'webfontloader';
import { Link, useNavigate } from 'react-router-dom';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const WelcomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="welcomepage">
            <SideNav></SideNav>
        <Header>
            
        </Header>
            <div className='welcome-box'>
                <div className="welcome-info">
                    <h2 className="h2-title">Rightovers</h2>
                    <p className='intro-sentence'>Leftovers done right!</p>
                    <Link to="/NearMePage">what's near me</Link>
                </div>
            </div>
        </div>
    );
};


const MealOptions = () => {
    const navigate = useNavigate();
    return(
        <div className='Find a meal'>
            <div className='Share a meal'>

            </div>
        </div>
    );
};

export default WelcomePage;