import React from 'react';
import './WelcomePage.css'; // Import the CSS for styling
import Header from './Header';
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});


const WelcomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="welcomepage">
        <Header>
            
        </Header>
            <div className='welcome-box'>
                <div className="welcome-info">
                    <h2 className="h2-title">Rightovers</h2>
                    <p className='intro-sentence'>Leftovers done right!</p>
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