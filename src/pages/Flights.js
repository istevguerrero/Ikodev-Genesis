import React from 'react'
import backgroundImage from '../assets/images/background.png';
import planeImage from '../assets/images/plane.png'
import { ListGroup, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Flights = () => {
    return (

        <div className = "hero">

            <div className = "overlay" style={{background: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>

                <div className = "body">

                <div className = "card" style = {{top: "53%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "40%", paddingLeft: "90%", position: "absolute",  boxShadow: "4px 4px #888888"}}>

                    <div style = {{color: "#1392B4", top: "2%", left: "0%", transform: "translate(-50%, -50%)", fontSize: "500%", paddingTop: "8%", marginLeft: "18%", position: "absolute", width: "30%"}}>
            
                        Flights
                        
                    </div>

                    <div className = "form-control" style = {{ position: "absolute", top: "53%", left: "50%", transform: "translate(-50%, -50%)"}}>

                    <Container fluid>

                    <Row className="mx-0">
                        
                        <Button as={Col} variant="secondary" className="mx-2">Vuelo #1</Button>
                        
                    </Row>

                    <br/>
                    <br/>

                    <Row className="mx-0">
                        
                        <Button as={Col} variant="secondary" className="mx-2">Vuelo #2</Button>
                        
                    </Row>

                    </Container>

                    </div>


                </div>

                </div>

            </div>

        </div>
    )
}
