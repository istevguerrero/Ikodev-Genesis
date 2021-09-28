import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="booking-managment" activeStyle>
                        Booking Managment
                    </NavLink>
                    <NavLink to="information-services" activeStyle>
                        Information Services
                    </NavLink>
                    <NavLink to="air-miles" activeStyle>
                        Air Miles
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <Bars />
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
