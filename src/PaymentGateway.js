import React from 'react';
import { Link } from "react-router-dom";

const PaymentGateway = () => {
    return (
        <div>
            <div class="wrapper">
                <div class="payment">
                  <div class="payment-logo">
                  <p>p</p>
                  </div>
                  <h2>Payment Gateway</h2>
                  <div class="form">
                   <div class="card space icon-relative">
                      <input type="text" class="input" placeholder="CARD HOLDER"/>
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="card space icon-relative">
                      <input type="text" class="input" data-mask="0000 0000 0000 0000" placeholder="Card Number"/>
                      <i class="far fa-credit-card"></i>
                    </div>
                    <div class="card-grp space">
                      <div class="card-item icon-relative">
                        <label class="label">Expiry</label>
                        <input type="text" name="expiry-data" class="input" data-mask="00 / 00"  placeholder="00 / 00"/>
                        <i class="far fa-calendar-alt"></i>
                      </div>
                      <div class="card-item icon-relative">
                        <label class="label">CVC/ CVV</label>
                        <input type="text" class="input" data-mask="000" placeholder="000"/>
                        <i class="fas fa-lock"></i>
                      </div>
                    </div>
                    <button class="btn" id="pay">
                    <Link to="/" style={{color:"white"}}>Pay</Link>
                    </button> 
                  </div>
                </div>
              </div>
            </div>
    )
}
export default PaymentGateway;