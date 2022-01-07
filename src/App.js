import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import './App.css';
import Homepage from "./Homepage";
import Navbar from "./Homepage_Components/Navbar";
import Footer from "./Homepage_Components/Footer";
import Donate from "./Donate";
import PaymentGateway from "./PaymentGateway";
import ContactForm from "./ContactForm";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>

      <Router>
        <scriptTag/>
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Donate" component={Donate} />
          <Route path="/PaymentGateway" component={PaymentGateway} />
          <Route path="/ContactForm" component={ContactForm} />
          </Switch>
          <Footer/>
        </Router>
      </div>
  )
}
}

export default App;
