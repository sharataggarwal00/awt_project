import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
      
        <div className="container abt" id="about">
            <h2 style={{textAlign:"center", textShadow:"10px", color:"rgb(36, 100, 116)", fontFamily:"Arial, Helvetica, sans-serif"}}>This is an organisation for Orphans.</h2>
            <br/>
            <br/>
            <div className="row text-center">
             
              <span className="col col-sm-4 text-center">
                <span className="spinner-grow text-warning text-center"></span>
                <p className="aboutus">A <b>non-profit</b> and <br/> fully <b>transparent </b>organisation.</p>
              </span>
            
              <span className="col col-sm-4 text-center">
                <span className="spinner-grow text-warning text-center"></span>
                <p className="aboutus">Gave shelter to more than <br/><b>1000</b><br/>orphans so far.</p>
              </span>
              
              <span className="col col-sm-4 text-center">
                <span className="spinner-grow text-warning text-center"></span>
                <p className="aboutus">Join  us in our <b>drive </b><br/>to give these kids the <br/><b>privilege</b> they deserve.</p>
              </span>
            </div>
        
          
          <hr className="ruler"/>
          <h2 style={{textAlign:"center", textDecoration:"solid", textShadow:"20px", color:"rgb(23, 94, 112)", fontFamily:"Arial, Helvetica, sans-serif"}}>"Some Stories: the ones written with <span className="text-muted">glitter</span>."</h2>
          <br/>

          <div className="row featurette bg-light">
            <div className="col-md-8">
              <h2 className="featurette-heading">Shivani Raman, <span className="text-muted">the sweetest of all.</span></h2> &nbsp; <br/>
              <p className="lead featurettepara">An 8-year old, sharp and brilliant child, Shivani Raman was found on a roadside in a small village of India.<br/>
                Some good-hearted people found her and contacted our team to take care of this child.
                She has a great memory and is very polite.<br/>In our orphanage home, she helps everyone around her and learns about her surroundings every day.
              </p>
              <p className="featurettequot">“When you lose your parents as a child, you are indoctrinated into a club, you're taken into life's severest confidence. You are undeceived.”</p>
            </div>
            <div className="col-md-4">
              <img className="bd-placeholder-img featurette-image img-fluid mx-auto" src="images/helped1.jpg" width="300px" height="100px"/>
            </div>
          </div>
      

          <div className="row featurette">
            <div className="col-md-8 order-md-2">
              <h2 className="featurette-heading">Harry Pinkman, <span className="text-muted">the wise man.</span></h2>
              <p className="lead featurettepara">This boy is 9 years old , at present.
              He lost his parents in a severe road accident when he was just 2 years old.<br/>
              One of the volunteers of our organization read about the incident in the paper and brought this child to our orphanage home.<br/>
              He is very good at Mathematics and has a vast interest in Science and Space.</p>
              <p className="featurettequot">“The purpose of having the orphans study all these diverse fields was not for them to just become geniuses, but to become polymaths – meaning they would be geniuses in a wide variety of fields.”</p>
            </div>
            
            <div className="col-md-4 order-md-1">
              <img className="bd-placeholder-img featurette-image img-fluid mx-auto" src="images/helped2.jpg" width="300px" height="300px"/>
            </div>
          </div>
      
          <div className="row featurette bg-light">
            <div className="col-md-8">
              <h2 className="featurette-heading">Chang Wei, <span className="text-muted">as calm as breeze.</span></h2>
              <p className="lead featurettepara">Chang Wei, an 8 years old kid, is a very obedient and calm human. He does anything he is asked for.<br/>
              His both parents, who worked in the army, lost their lives in a battle.<br/>Our team adopted this child from an army personnel who was a friend of his dad.<br/>
              Along with a friendly nature, he helps everyone around.
              </p>
              <p className="featurettequot">"Not everyone has Parents. Life leaves some people with just DREAMS.”</p>
            </div>
            <div className="col-md-4">
              <img className="bd-placeholder-img featurette-image img-fluid mx-auto" src="images/helped4.jpg" width="300px" height="100px"/>
            </div>
          </div>
          
          
          <div className="text-center don">
            <h5 className="quot" >“We need to value donors as much as we need value from them.”</h5>
            <a className="btn btn-info btn-lg btn-rounded" role="button" href="" target="_self"><Link to="/Donate" style={{color:"white"}}>Donate today</Link></a> <br/>
            <hr className="ruler"/>
          </div>
          
        
          </div>
          
    )
}

export default AboutUs;