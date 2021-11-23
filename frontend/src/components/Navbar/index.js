import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import pIcon from '../../assets/images/PLANEICON.png'
import { Dropdown } from 'react-bootstrap';

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

                    <div className="dropdown">
                        <Dropdown align="start" id="dropdown-menu-align-start" >
                    
                        <Dropdown.Toggle as={Bars}
                        
                        id="dropdown-menu-align-start" 
                        >
                        
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                            <Dropdown.Item href="#" >
                                <NavLink to="air-miles" activeStyle>
                                Settings
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </NavBtn>

            </Nav>
    )
}

export default Navbar
