import React from 'react';
import "./index.css"
import Jumbotron from "./Donate_Components/Jumbotron";
import { Link } from "react-router-dom";


const Donate = () => {
    return (
        <div>
            <Jumbotron/>
            <main role="main" class="container">
                <div class="row justify-content-between">
                    <div class="col-md-8 blog-main">
                        <div class="blog-post">
                            <h2 class="blog-post-title">Your Donation</h2>
                                <p>
                                    We're happy as an organization that more and more people are joining us in our campaign each day! Our ultimate goal is that the children who have no one in their lives never feel underprivileged. Our organization wants each child to have a great and independent future. We understand that your non-monetary contributions can be of great help to us, but donations through our website help us to be independent. We want to be entirely transparent with the world and so here we share even the smallest details of our campaign.
                                </p>
                        </div>
                        <hr/><br/>
                        <div class="blog-post">
                            <h2 class="blog-post-title">A penny of yours; a cute little smile</h2>
                                <p>
                                    Even a single dollar of your donations can help in providing helpful resources to a child, be it food, education, or clothing.
                                </p>
                        </div>
                        <hr/><br/>
                        <div class="blog-post">
                            <h2 class="blog-post-title">Your small donations can provide resources to multiple orphans</h2>
                                <p>
                                    If you're willing to contribute any amount, it acts as an investment for these childrens' future.
                                </p>
                        </div>
                        <hr/><br/>
                        <div class="blog-post">
                            <h2 class="blog-post-title">Your donation helps us be independent</h2>
                                <p>
                                    Our organization is working for humanity and the betterment of human lives. Your donation not only contributes towards their future but also lends to the ongoing expenses of the  organization. These expenses include the server costs, full-time employees' salary who work day and night for improvements and new suggestions, funding that go as resources to the orphans.
                                </p>
                        </div>
                        <hr/><br/>
                        <h2>Donations and Payments</h2>
                        <br/>
                        <div class="blog-post">
                            <h4 class="blog-post-title">Payments are 100% secure</h4>
                                <p>
                                    The donations you make here are carried out through a secure and encrypted gateway. So, you don't have to worry about your personal details being stolen.
                                </p>
                        </div>
                        <br/>
                        <div class="blog-post">
                            <h4 class="blog-post-title">Donation receipts</h4>
                                <p>
                                    We mail the receipt for the donation you make here via the Email ID you use to Log in. If you want the donation to be entirely anonymous, just contact us and we won't generate the receipt for the same.
                                </p>
                        </div>
                    </div>

    
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
                                    <a class="btn btn-secondary" style={{width:"100%"}}> <Link to="/PaymentGateway">Pay</Link> </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Donate;