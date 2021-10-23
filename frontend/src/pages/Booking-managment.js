import React from 'react'
import backgroundImage from '../assets/images/background.png';
import planeImage from '../assets/images/plane.png';
import { Nav, NavLink } from '../components/Navbar/NavbarElements';

export const Booking = () => {
    return (

        <div className = "hero">

            <div className = "overlay" style={{background: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>

                <div className = "body">

                <div className = "card" style = {{top: "53%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "40%", paddingLeft: "90%", position: "absolute",  boxShadow: "4px 4px #888888"}}>

                    <div style = {{color: "#1392B4", top: "2%", left: "0%", transform: "translate(-50%, -50%)", fontSize: "250%", paddingTop: "10%", marginLeft: "50%", position: "absolute", width: "30%"}}>
            
                        Where would you like to go?
                        
                    </div>

                    <div className = "form-control" style = {{ position: "absolute", top: "53%", left: "50%", transform: "translate(-50%, -50%)"}}>

                        <form>

                                From:
                                <input type="text" name="name" />

                                To:
                                <input type="text" name="name" />

                                Cabin Class & Travellers:
                                <input type="text" name="name" />

                                Departe Date:
                                <input type="text" name="name" />

                                Return Date:
                                <input type="text" name="name" />
                                
                                <Nav>

                                    <NavLink to="flights">

                                        <input type="submit" value="Search Flighs" />

                                    </NavLink>

                                </Nav>
                        </form>

                    </div>


                </div>

                </div>

            </div>

        </div>
    )
}
