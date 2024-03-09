import React from 'react';
import './NearYou.css'; // Import the CSS for styling
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});

function dododo() {
    var listContainer = document.getElementById('list-container');
    listContainer.classList.toggle('viewing');
        
}

const NearYou = () => {
    const navigate = useNavigate();
    return (
        <div className="NearYou">
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
                    <li onClick={dododo}>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
            </div>
        </div>
    );
};

export default NearYou;