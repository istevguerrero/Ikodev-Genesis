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

          <Nav style={{position: "absolute", paddingLeft: "19%", paddingTop: "31.5%", width: "100%", height: "45px", fontSize: "1.3rem", justifyContent: "center"}}>

            <NavBtnLink to="booking-managment" activeStyle style={{color: "white", borderRadius: 55, position: "absolute", background: "rgb(240,127,222)", background: "linear-gradient(90deg, rgba(240,127,222,1) 0%, rgba(141,68,231,1) 100%)", boxShadow: "-2px 6px 25px #D26DDD"}}>

              Book Now

            </NavBtnLink>

          </Nav>

        </div>

    </div>

    )
}
