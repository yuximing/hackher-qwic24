// import UserMenu from './UserMenu';
// import PageMenu from './PageMenu';
import WebFont from 'webfontloader';
import './WelcomePage.css'; // Import the CSS for styling
import { Sidenav, Nav } from 'rsuite';

WebFont.load({
    google: {
        families: ['Pacifico:400']
    }
});

const Header = () => {
  return (
    <header>
        <Sidenav></Sidenav>
      <div className="header-container">
        {/* <PageMenu rightAligned={false}/>
          <a href="/dashboard" className="logo">
            <div className="user-info">
              <h2 className="h2-title">PizzaMind</h2>
            </div>
          </a> */}
      </div>
    </header>
  );
};

export default Header;