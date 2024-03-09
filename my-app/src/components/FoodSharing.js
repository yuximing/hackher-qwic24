import { useNavigate } from "react-router-dom";

const About = () => {
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

const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLocation('Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}');
    }, (error) => {
        console.error('Error getting location: ',error);
        setLocation('Location not available')
    });
};