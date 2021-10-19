import React from 'react';
import useAuth from '../../hooks/useAuth';
import "./Menu.css"
import { Link } from "react-router-dom";


const Menu = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              {/* <img className="w-75" src={logo} alt="" /> */}
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
               
                <Link to="/all-medicine" className="items">
                  <li>All Medicine</li>
                </Link>
                <Link to="/donate" className="items">
                  <li>Donate Medicine</li>
                </Link>
                <Link to="/request" className="items">
                  <li>Request Medicine</li>
                </Link>
             
                <Link to="photo-gallery" className="items">
                  <li>Photo Gallery</li>

                </Link>
                
                <li> {user.displayName && <span style={{ color: 'red' }}>Hello {user.displayName} </span>}</li>
                {
                  user.displayName ?
                    <button onClick={logOut}>log out</button>
                    :
                    <Link to="Login" className="items">
                      <li>Login</li>
                    </Link>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;