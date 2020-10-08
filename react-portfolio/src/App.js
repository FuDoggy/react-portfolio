import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        
        <Switch>
          <Route path="/" exact component={()=> <Home/>}/>
          <Route path="/portfolio" exact component={()=> <Portfolio/>}/>
          <Route path="/about" exact component={() => <About/>}/>
          <Route path="/contact" exact component={() => <Contact/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
