import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RecyclingIcon from '@mui/icons-material/Recycling';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import SettingsIcon from '@mui/icons-material/Settings';
 
export const NavData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "What's Near Me",
        link: ".././NearMePage"
    },
    {
        id: 3,
        icon: <PersonPinCircleIcon/>,
        text: "Food Near You",
        link: ".././NearYou"
    },
    // {
    //     id: 2,
    //     icon: <RecyclingIcon/>,
    //     text: "Food Banks Near",
    //     link: ".././settings"
    // },
    // {
    //     id: 3,
    //     icon: <SettingsIcon/>,
    //     text: "Settings",
    //     link: ".././settings"
    // }
]