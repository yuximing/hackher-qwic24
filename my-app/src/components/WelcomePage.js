import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import SideNav from './SideNav';
import WebFont from 'webfontloader';
import { Link, useNavigate } from 'react-router-dom';
import NearYou from './NearYou';
import heart_logo from '../assets/images/heart_logo.png';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const WelcomePage = () => {
    const navigate = useNavigate();
    const handleClickNearYou = () => {
        navigate('/NearYou'); // Make sure to use the correct path
      };
    const handleClickFoodSharing = () => {
        navigate('/FoodSharing'); // Make sure to use the correct path
    };
    const handleClickNearMePage = () => {
        navigate('/NearMePage'); // Make sure to use the correct path
    };
    return (
        <div className='flex flex-row w-screen'>
            <SideNav />
            <div className="welcomepage w-[100vw]">
                <Header>
                    
                </Header>
                <div className='welcome-box'>
                    <div className="welcome-info">
                        <h2 className="h2-title">Rightovers</h2>
                        <p className='intro-sentence'>Leftovers done right!</p>
                        <div><center>
                        <img src={heart_logo} alt="Description of the image" width="35%" height="35%"/>
                        </center>
                        </div><br></br><br></br>
                    <button onClick={handleClickNearMePage}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}> 
                    what's near me</button>
                    <p></p>
                    <button onClick={handleClickNearYou}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}> 
                    Find Food
                    </button>
                    <p></p>
                    <button onClick={handleClickFoodSharing}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}> Find Foodbank
                    </button>
                </div>
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