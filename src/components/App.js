import React, { Component, useState } from "react";
import '../styles/App.css';
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

function LocationDisplay() {
    const location = useLocation();
    return(
        <div data-testid="location-display">
            <h3>{location.pathname}</h3>
        </div>
    )
}

function App() {

    return (
        <div id="main">
            <Router>
                <Nav />
                <LocationDisplay />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/:id" component={Error} />
                </Switch>
            </Router>
        </div>
    )
}


export default App;
