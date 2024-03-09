import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import SideNav from './SideNav';
import WebFont from 'webfontloader';
import { Link, useNavigate } from 'react-router-dom';

const FoodSharing = () => {
    const navigate = useNavigate();
    return (
        <div className="Food Sharing">
        <Header>
            
        </Header>
            <div className='welcome-box'>
                <div className="welcome-info">
                    <h2 className="h2-title">Share Food</h2>
                    <p className='intro-sentence'>Here is where you can share your meal</p>
                </div>
            </div>
        </div>
    );
};

// const handleLocationClick = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         setLocation('Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}');
//     }, (error) => {
//         console.error('Error getting location: ',error);
//         setLocation('Location not available')
//     });
// };

export default FoodSharing;