import React, { Component } from 'react';
import './NearYou.css'; // Import the CSS for styling
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideNav from './SideNav';
import axios from 'axios';
import Test from './test.js';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});

//const navigate = useNavigate();

const ListItem = ({ foodItems, restaurantName, address }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={visible ? "listElementActive" : "listElementHover"} onClick={() => { setVisible(!visible) }}>
            <h4>{restaurantName}</h4>
            <h5>{address}</h5>
            <ul className={visible ? 'show':'hide'}>
                {foodItems.map(food => <li>{food}</li>)}
            </ul>
            </div>
    )
}

const NearYou = () => {
    const [location, setLocation] = useState('');

    const handleLocationClick = () => {
        navigator.geolocation.getCurrentPosition(
            async(position) => {
                try{
                    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDaFXK8g-U2IXRiruiarIJtQkJcy4pAVoE`);
                    const { results } = response.data;
                    if (results && results.length > 0) {
                        setLocation(results[0].formatted_address);
                    } else {
                        setLocation([44.2258905, -76.4987173]);
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

        <div className="NearYou flex w-[100vw] flex-row">
            <SideNav/>
            <div className='w-[100vw]'>
                <div className='welcome-box'>
                    <div className="title-info">
                        <h2 className="h2-title">Rightovers</h2>
                        <p className='intro-sentence'>Leftovers done right!</p>
                    </div>
                </div>
                <div className='locations'>
                    <div className='header'>
                    <h3 className='subtitle'>Locations serving food near you:</h3>
                    </div>
                    <ul id='list-container'>
                    <ListItem foodItems = {['apple', 'banana']} restaurantName = 'McDs' address = '1234 princess st.'></ListItem>
                    <ListItem foodItems = {['apple', 'banana']} restaurantName = 'McDs' address = '1234 princess st.'></ListItem>
                    </ul>
                    
                </div> 
                
                <div className='map'>
                    <button onClick={handleLocationClick}>Get Current Location</button>
                    <p>{location}</p>
                    {location ? <Test centre = {location}/> : '' }
                </div>
            </div>
        </div>
    );
};

export default NearYou;