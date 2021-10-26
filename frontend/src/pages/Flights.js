import React from 'react'
import backgroundImage from '../assets/images/background.png';
import planeImage from '../assets/images/plane.png'
import { ListGroup, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Flights = () => {

    const [tickets, getTickets] = useState('');

    useEffect(() => {

        getAllTickets();

    }, [])

    const getAllTickets = () => {

        axios.get('http://localhost:4000/users')
        .then((response) => {

            const allTickets = response.data.data.allTickets;

            getTickets(allTickets);

        })

        



    }
    

    useEffect(() => {

        axios.get('http://localhost:4000/users').then((response) => {

            console.log("La respuesta a la peticion es", response.data.data);

        })

    })

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
                        
                        <Button as={Col} variant="secondary" className="mx-2" style={{fontSize: "2.2rem"}}>Vuelo #1</Button>
                        
                    </Row>

                    <br/>
                    <br/>

                    <Row className="mx-0">
                        
                        <Button as={Col} variant="secondary" className="mx-2" style={{fontSize: "2.2rem"}}>Vuelo #2</Button>
                        
                    </Row>

                    <br/>
                    <br/>

                    <Row className="mx-0">
                        
                        <Button as={Col} variant="secondary" className="mx-2" style={{fontSize: "2.2rem"}}>Vuelo #3</Button>
                        
                    </Row>

                    </Container>

                    </div>


                </div>

                </div>

            </div>

        </div>
    )
}
