import React from 'react';
import backgroundImage from '../assets/images/background.png';
import planeImage from '../assets/images/plane.png';
import { Nav, NavBtnLink } from '../components/Navbar/NavbarElements';

export const Home = () => {
  
    return (

    <div className = "hero">

        <div className = "content">

          <img className="logo" src={planeImage}/>

        </div>

        <div className = "overlay" style={{background: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 40, paddingLeft: "55%", paddingTop: "20%"}}>Season Sales</div>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 50, paddingLeft: "55%", paddingTop: "23%"}}>6% Discount on China, Japan &</div>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 50, paddingLeft: "55%", paddingTop: "26.5%"}}>South Korea</div>

          <Nav style={{position: "absolute", paddingLeft: "54.3%", paddingTop: "31.5%", width: "160px", height: "45px", fontSize: "1.3rem", justifyContent: "center"}}>

            <NavBtnLink to="booking-managment" activeStyle style={{background: "linear-gradient(90deg, rgba(218,12,212,1) 53%, rgba(144,36,200,1) 89%)"}}>

              Book Now

            </NavBtnLink>

          </Nav>

        </div>

    </div>

    )
}
