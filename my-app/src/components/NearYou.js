import React, { Component } from 'react';
import './NearYou.css'; // Import the CSS for styling
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideNav from './SideNav';
import Map from './map.js';
import axios from 'axios';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});

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
    
    const itemsOne = ["Spaghetti Carbonara",
        "Grilled Salmon",
        "Caesar Salad",
        "Chicken Tikka Masala",
        "Margherita Pizza",
        "Sushi Rolls (e.g., California Roll)",
        "Beef Stir-Fry with Vegetables",
        "Chocolate Chip Cookies",
        "Cheeseburger with Fries",
        "Vegetable Pad Thai"]
    const itemsTwo = ["Vegetable Lasagna",
    "Tacos",
    "Chicken Shawarma",
    "Caprese Salad",
    "Beef Stroganoff",
    "Shrimp Scampi",
    "Falafel Wrap",
    "Mushroom Risotto",
    "Chicken Caesar Wrap"]
    const itemsThree = ["Pad Thai Noodles",
    "Grilled Vegetable Panini",
    "Beef Wellington",
    "Chicken Parmesan",
    "Greek Salad",
    "BBQ Ribs",
        "Margarita Cocktail"]
    
        const [location, setLocation] = useState('');

        const handleLocationClick = () => {
            navigator.geolocation.getCurrentPosition(
                async(position) => {
                    try{
                        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDaFXK8g-U2IXRiruiarIJtQkJcy4pAVoE`);
                        const { results } = response.data;
                        if (results && results.length > 0) {
                            setLocation([position.coords.latitude, position.coords.longitude]);
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
        
        <div className="NearYou flex w-[100vw] flex-row">
            <SideNav/>
            <div className='w-[90vw]'>
                <div className='welcome-box'> 
                    <div className="title-info">
                        <h2 className="h2-title">Rightovers</h2>
                        <p className='intro-sentence'>Leftovers done right!</p>
                    </div>
                </div>
                <div className='locations'>
                    <div className='header'>
                    <div className='map'>
                    <button onClick = {handleLocationClick} 
                                style={{
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                }}> Click Here So We Can Get Our Location </button>
                        {location ? <Map loc={location} />:''}
                    </div>
                    <h3 className='subtitle'>Locations serving food near you:</h3>
                    </div>
                    <ul className='list-container'>
                    <ListItem foodItems = {itemsOne} restaurantName = 'Food Bank 1' address = '395 Earl St.'></ListItem>
                    <ListItem foodItems = {itemsTwo} restaurantName = 'Food Bank 2' address = 'Victoria Park'></ListItem>
                    <ListItem foodItems = {itemsThree} restaurantName = 'Food Bank 3' address = '16 Beverley St.'></ListItem>
                    </ul>
                    
                </div> 
                
            </div>
        </div>
    );
};

export default NearYou;