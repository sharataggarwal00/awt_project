import React from 'react';
import "./index.css"

const ContactForm = () => {
    return (
    <div>
        <div class="notify"><span id="notifyType" class=""></span></div>
            <div class="container bg-light maindiv">
                <div class="container">
                    <div>
                        <h1 class="text-center">Contact Us</h1>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-md-6">
                            <div id="image">
                                <img src="images/contact.jpg" class="img1"/>
                            </div>
                        </div>
                        <br/>
                        <div class="col-md-6 formcss">
                            <form class="my-form form-group">
                        
                                <label for="form-name">Name</label>
                                <input type="email" class="form-control" id="form-name" placeholder="Name"/><br/>
                        
                        
                                <label for="form-email">Email Address</label>
                                <input type="email" class="form-control" id="form-email" placeholder="Email Address"/><br/>
                        
                        
                                <label for="form-subject">Telephone</label>
                                <input type="text" class="form-control" id="form-subject" placeholder="Subject"/><br/>
                        
                        
                                <label for="form-message">Email your Message</label>
                                <textarea class="form-control" id="form-message" placeholder="Message" ></textarea><br/>
                        
                                <div id="success" class="button btn btn-info" type="submit">
                                    Submit
                                </div>             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm;