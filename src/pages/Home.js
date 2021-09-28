import React from 'react'
import backgroundImage from '../assets/images/background.png';
import planeImage from '../assets/images/plane.png'
import Navbar from '../components/Navbar';

export const Home = () => {
    return (
    <div className = "hero">
        <div className = "content">

          <img className="logo" src={planeImage}/>
        </div>

        <div className = "overlay" style={{background: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 40, paddingLeft: "55%", paddingTop: "26%"}}>Season Sales</div>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 50, paddingLeft: "55%", paddingTop: "29%"}}>6% Discount on China, Japan &</div>

          <div style={{ color: '#0093B2', position: "absolute", fontSize: 50, paddingLeft: "55%", paddingTop: "31.5%"}}>South Korea</div>

        </div>
    </div>
    )
}
