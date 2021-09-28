import React from 'react';
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
                            
                            <div style = { { color: "#000000", top: "1%", right: "50%", transform: "translate(-50%, -50%)", fontSize: "150%", paddingTop: "10%", marginLeft: "70%", position: "absolute", width: "30%"}}>
                                
                                Comming soon!
                            
                            </div>
                        
                        </div>
   
                    <div style = { { color: "#1392B4", top: "45%", right: "47%", transform: "translate(-50%, -50%)", fontSize: "250%", paddingTop: "10%", marginLeft: "70%", position: "absolute", width: "30%"}}>
                        
                        Services
                    
                    </div>

                        <div className = "card" style = {{top: "75%", right: "20%", transform: "translate(-50%, -50%)", paddingTop: "10%", paddingLeft: "46%", position: "absolute",  boxShadow: "4px 4px #ffffff"}}>
                            
                            <div style = { { color: "#000000", top: "1%", right: "50%", transform: "translate(-50%, -50%)", fontSize: "150%", paddingTop: "10%", marginLeft: "70%", position: "absolute", width: "30%"}}>
                                
                                Comming soon!
                            
                            </div>
                        
                        </div>
                </div>

                </div>

            </div>

        </div>
    )
}