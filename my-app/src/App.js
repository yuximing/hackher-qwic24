import React, { useEffect, useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Compost from './components/Compost';
import FoodSharing from './components/FoodSharing';
import Settings from "./components/Settings";
import WelcomePage from './components/WelcomePage';
import NearMePage from './components/NearMePage';
import NearYou from './components/NearYou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message));
  // }, []);
  console.log(window.location.origin)
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/NearMePage" element={<NearMePage />} />
          <Route path="/NearYou" element={<NearYou />} />
          <Route path="/compost" element={<Compost />} />
          <Route path="/foodsharing" element={<FoodSharing />}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
