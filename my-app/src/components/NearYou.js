import React, { Component } from 'react';
import './NearYou.css'; // Import the CSS for styling
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideNav from './SideNav';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const ListItem = ({ foodItems, restaurantName, address }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={visible ? "listElementActive" : "listElementHover"} onClick={() => {setVisible(!visible)}}>
            <h4>{restaurantName}</h4>
            <h5>{address}</h5>
            <ul className={visible ? 'show':'hide'}>
                {foodItems.map(food => <li>{food}</li>)}
            </ul>
        </div>
    )
}



const NearYou = () => {
    const navigate = useNavigate();
    return (
        <div className="NearYou flex w-[100vw] flex-row">
            <SideNav/>
            <div className=' w-[100vw]'>
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

            </div>
        </div>
    );
};

export default NearYou;