import logo from './logo.svg';
import './App.css';
import './static/main.css'
import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Booking } from './pages/Booking-managment';
import { Home } from './pages/Home';
import { Information } from './pages/Info-Services';
import { Flights } from './pages/Flights';

function App() {

  return (
    
    <Router> 

          <Navbar/>

          <Switch>

            <Route path="/" exact component={Home}/> 
            
            <Route path="/booking-managment" component={Booking}/>

            <Route path="/Info-Services" component={Information}/>

            <Route path="/flights" component={Flights}/>

          </Switch>

    </Router>
    
  );
}
export default App;
