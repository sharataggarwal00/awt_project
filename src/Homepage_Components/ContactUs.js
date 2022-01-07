import React from 'react';
import '../index.css';


const ContactUs = () => {
    return (
        <div className="container contact">
            <h2 className="text-center text-light">Contact Us</h2>
            <div className="row">
                <div className="col-md-5 mr-auto">
                    <h3 className="font-weight-bold">Do you have any questions for us?</h3>
                    <p className="mb-5 textcontact">
                        We are available all day round for the world to receive the <span className="text-warning">queries</span> about our organization, how we work and anything else.<br/>
                        Our team gets many questions every day and we love to answer them. The <span className="text-warning">relevant</span> and good questions are added to our <span className="text-warning">FAQ</span> which is the very next section. You can scroll down and check if the question you have in your mind is already there.
                    </p>
                
                    <h3 className="font-weight-bold">Team Working Hours:</h3>
                    <p className="mb-5 textcontact"><b>Monday to Friday:</b> 9a.m to 7p.m<br/><br/><b>Saturday/Sunday:</b> 9a.m to 5p.m</p>
                </div>
                <div className="col-md-6">
                    <img src="images/contactusimg.jpg" className="contactusimg"/>
                    <div className="contactbtn text-center">
                        <a className="btn btn-dark btn-lg btn-rounded" role="button" href="ContactForm/contactform.html" target="_self">Write to Us</a>
                    </div>
                </div>
            </div>
            <hr className="ruler"/>
        </div>


    )
}
export default ContactUs;