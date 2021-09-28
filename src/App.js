import logo from './logo.svg';
import './App.css';
import './static/main.css'
import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Booking } from './pages/Booking-managment';
import { Home } from './pages/Home';

function App() {

  return (
    
    <Router> 

          <Navbar/>

          <Switch>

            <Route path="/" exact component={Home}/> 
            
          </Switch>

          <Route path="/booking-managment" component={Booking}/>

    </Router>
    
  );
}
export default App;
