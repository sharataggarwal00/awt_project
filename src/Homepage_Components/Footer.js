import React from 'react';
import '../index.css';


const Footer = () => {
    return(
        <footer className="page-footer font-small pt-4 foot">

            <div className="container">
              <div className="text-center">
               <a href="" role="button" className="btn btn-outline-white btn-info btn-rounded" target="_self">Donate for Humanity!</a>
              </div>
              
              <div className="row">

                
                  <div className="col-md-12 py-4 text-center">

                    <a href="#" className="tw-ic text-light">
                      <i className="fa fa-twitter-square fa-lg white-text mr-md-6 mr-2 fa-2x"> </i>
                    </a>
                    
                    <a href="#" className="li-ic text-light">
                      <i className="fa fa-linkedin-square fa-lg white-text mr-md-6 mr-2 fa-2x"> </i>
                    </a>
                    
                     <a href="#" className="fb-ic text-light">
                        <i className="fa fa-facebook-official fa-lg white-text mr-md-6 mr-2 fa-2x"> </i>
                     </a>
                    
                    <a href="#" className="ins-ic text-light">
                      <i className="fa fa-instagram fa-lg white-text mr-md-6 mr-2 fa-2x"> </i>
                    </a>
                  </div>

                

              </div>
              
            </div>
              
              <div className="footer-copyright text-center py-3 foot1">© 2021 Copyright &middot;
                <a href="New Hope.html"> NEW-HOPE</a>
              </div>
              

          </footer>
)
    
}
export default Footer;