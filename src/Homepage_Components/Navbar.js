import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark navi">
              <div className="container-fluid">
                <a className="navbar-brand" href="#home"><Link to="/"><img src="images/your-logo (2).png" width="210" height="80" alt="new hope"/></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav text-right">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#about"><i className="fa fa-users" aria-hidden="true"></i><Link to="/"> About Us </Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="donate/donate.html"><i className="fa fa-money" aria-hidden="true"></i><Link to="/Donate">Donate</Link> </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" target="_self" href="ContactForm/contactform.html"><i className="fa fa-address-card" aria-hidden="true"></i><Link to="/ContactForm"> Contact Us </Link> </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faq"><i className="fa fa-list" aria-hidden="true"></i><Link to="/"> FAQ </Link></a>
                    </li>
                    <li>
                      <a className="nav-link" data-toggle="modal" style={{color:"white"}} data-target="#loginModal"><span id="navbarlogin"><i className="fa fa-user"></i> Login </span></a>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        
        <div className="modal fade" id="loginModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark">
  
              <div className="modal-header">
                <h2 className="modal-title" style={{color:"white"}}>Login</h2>
                <button type="button" className="close" data-dismiss="modal" style={{color:"white"}}><span>&times;</span></button>
              </div>
  
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="email" className="col-form-label" style={{color:"white"}}>Email</label>
                    <input type="email" className="form-control" id="email"/>
                  </div>
                  <div className="form-group">
                    <label for="password" className="col-form-label" style={{color:"white"}}>Password</label>
                    <input type="password" className="form-control" id="password"/>
                  </div>
                </form>
              </div>
  
              <div className="modal-footer">
                <p style={{color:"white"}}>Not with us yet, <a href="#">Sign Up!</a></p>
                <button type="button" className="btn btn-primary" style={{color:"white"}} data-dismiss="modal">Login</button>
              </div>
  
            </div>
          </div>
        </div>
      </div>
              
    )
}
export default Navbar;