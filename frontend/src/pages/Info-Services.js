import React from 'react';
import ReactPlayer from 'react-player';
import backgroundImage from '../assets/images/background.png';

export const Information = () => { 

    return (

        <div className = "hero">

            <div className = "overlay" style={{background: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>

                <div className = "body">
                
                <div className = "card" style = {{top: "53%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "40%", paddingLeft: "90%", position: "absolute",  boxShadow: "4px 4px #888888"}}>
                    
                    <div style = { { color: "#1392B4", top: "3%", right: "47%", transform: "translate(-50%, -50%)", fontSize: "250%", paddingTop: "10%", marginLeft: "50%", position: "absolute", width: "30%"}}>
                        
                        Information
                    
                    </div>
                    
                        <div className = "card" style = {{top: "33%", right: "20%", transform: "translate(-50%, -50%)", paddingTop: "10%", paddingLeft: "46%", position: "absolute",  boxShadow: "4px 4px #ffffff"}}>
                            
                            <div style = { { color: "#000000", top: "28%", right: "-48%", transform: "translate(-50%, -50%)", fontSize: "150%", paddingTop: "10%", marginLeft: "40%", position: "absolute", width: "98%", textAlign: "justify"}}>
                                
                            Ikoflight es una aerolinea pequeña que se especializa en vuelos nacionales. Fue fundada el primero de septiembre del 2021 por la pequeña empresa Ikodev, comenzando como el proyecto Genesis. Nuestro principal objetivo, a parte de brindar la mejor experiencia de vuelo para los usuarios es ofrecer una aplicacion web sencilla y comoda de usar para la compra de tiquetes.
                            
                            </div>
                        
                        </div>
   
                    <div style = { { color: "#1392B4", top: "45%", right: "47%", transform: "translate(-50%, -50%)", fontSize: "250%", paddingTop: "10%", marginLeft: "70%", position: "absolute", width: "30%"}}>
                        
                        Services
                    
                    </div>

                        <div className = "card" style = {{top: "75%", right: "20%", transform: "translate(-50%, -50%)", paddingTop: "10%", paddingLeft: "46%", position: "absolute",  boxShadow: "4px 4px #ffffff"}}>
                            
                        <div style = { { color: "#000000", top: "28%", right: "-48%", transform: "translate(-50%, -50%)", fontSize: "150%", paddingTop: "10%", marginLeft: "40%", position: "absolute", width: "98%"}}>
                                
                            - Compra de tiquetes de vuelo<br></br>
                            - Informacion sobre vuelos nacionales y vuelos por Latinoamerica<br></br>
                            - Vuelos directos o con escala<br></br>
                            - Vuelos con unica o varias aerolineas<br></br>
                            - Para mas informacion contactar al siguiente correo: cdriascosr136@gmail.com

                            </div>
                        
                        </div>
                        
                        <div style = {{position: "absolute", top: "30%", left: "60%"}}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=XP7KRHY564M&t" />
                        </div>
                        
                        
                </div>

                </div>

            </div>

        </div>
    )
}