import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {SocialIcon} from 'react-social-icons';

class Header extends Component {
  render() {
    return (
      <div className="Navbar">
        
          <img src="../Images/nav-profile-photo.png" className="profile-photo" height="140px" width="140px" alt="Mahesh Khatiwada"></img>
          <div className="profile-div">
          <h4>MAHESH KHATIWADA</h4>
          <h5>Full Stack Developer</h5>
          </div>
        <ul>
          <li>
            
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
          </li>
          {/* <li>
          <NavLink to="/about" activeClassName="active" >About </NavLink>
          </li> */}
          <li>
          <NavLink to="/skills" activeClassName="active">Skills </NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeClassName="active" >Experience</NavLink>
          </li>
          <li>
          <NavLink to="/projects" activeClassName="active" >Projects </NavLink>
          </li>
          <li>
          <NavLink to="/education" activeClassName="active" >Education </NavLink>
          </li>
          <li>
          <NavLink to="/Achievements" activeClassName="active" >Achievements </NavLink>
          </li>

         
        </ul>
        <div className="social-icon">
            <SocialIcon url="https://twitter.com/maheshk005" className="social-link" target="_blank" />
            <SocialIcon url="https://www.linkedin.com/in/mahesh-khatiwada-955026111/" className="social-link" target="_blank" />
            <SocialIcon url="https://myaccount.google.com/" className="social-link" target="_blank" />
            <SocialIcon url="https://www.facebook.com" className="social-link" target="_blank"/>
            <SocialIcon url="https://www.youtube.com" className="social-link" target="_blank" />
          </div>
      </div>
      
    );
  }
}

export default Header;
