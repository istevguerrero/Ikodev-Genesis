import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import pIcon from '../../assets/images/PLANEICON.png'

const Navbar = () => {
    
    return (

            <Nav>

                <NavLink to="/">

                    <img src={pIcon}></img>

                    <div style={{paddingLeft: "10%"}}>Ikoflights</div>

                </NavLink>

                <NavMenu>

                    <NavLink to="booking-managment" activeStyle>

                        Booking Managment
                        
                    </NavLink>

                    <NavLink to="/Info-Services" activeStyle>

                        Information Services

                    </NavLink>

                    <NavLink to="air-miles" activeStyle>

                        Air Miles

                    </NavLink>

                </NavMenu>

                <NavBtn>

                    <Bars/>

                </NavBtn>

            </Nav>
    )
}

export default Navbar
