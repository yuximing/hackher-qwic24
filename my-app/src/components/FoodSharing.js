import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import SideNav from './SideNav';
import WebFont from 'webfontloader';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const FoodSharing = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');

    const handleLocationClick = () => {
        navigator.geolocation.getCurrentPosition(
            async(position) => {
                try{
                    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBBC4YowgOpQfmb7qM4ZI3EpKZuo8FXRsc`);
                    const { results } = response.data;
                    if (results && results.length > 0) {
                        setLocation(results[0].formatted_address);
                    } else {
                        setLocation('Address not found');
                }
            } catch (error){
                console.error('Error geocoding address: ',error);
                setLocation('Error getting address')
            }
        },
        (error) => {
            console.error('Error getting location: ', error);
            setLocation('Location not available');
            }
        );
    };

    return (
        <div>
            <SideNav />
            <Header />

            <div className="Food Sharing">
            <div>
                <button onClick = {handleLocationClick} > Get Location </button>
                <p>{location}</p>
            </div>
            <Header>
                
            </Header>
                <div className='welcome-box'>
                    <div className="welcome-info">
                        <h2 className="h2-title">Share Food</h2>
                        <p className='intro-sentence'>Here is where you can share your meal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default FoodSharing;