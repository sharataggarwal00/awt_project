import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";

const Payment = () => {
    return (
        <div class="col-md-4">
            <div class="wrapper">
                <div class="payment">
      
                    <div class="payment-logo">
                        <p>p</p>
                    </div>
          
                    <div class="form">
            
                        <div class="slideContainer">
                            <input type="range" min="1" max="100" value="1" id="myRange" class="slider"/>
                        </div>
                        <br/>
                        <div class="card-item">
                            <label class="label">Amount: $<span id="value"></span></label>
                        </div>
            
                         <a href="payment.html" class="btn btn-secondary"><Link to="/PaymentGateway">Pay</Link></a> 
            
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Payment;