import React from 'react';
import '../index.css';


const Carousel = () => {
    return (
        <div id="home" className="carousel slide carousel-fade z-depth-1-half responsive carsel" data-ride="carousel" data-interval="2100">
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src="images/img6.jpg" className="caro d-block w-100" alt="orphansall" style={{height:"697px", opacity:"90%"}}/>
                <div className="carousel-caption">
                  <h3>Adopt them</h3>
                  <p>If you're willing to give a new life to someone.</p>
                </div>
              </div>

              <div className="carousel-item active">
                <img src="images/img2.jpg" className="caro d-block w-100" alt="covidsituation" style={{height:"697px", opacity:"95%"}}/>
                <div className="carousel-caption">
                  <h3>Help those in need</h3>
                  <p>Stop wasting valuable time with projects that just isn't you.</p>
                  <p><a className="btn btn-lg btn-info" href="" role="button" data-target="#staticBackdrop">Sign up today</a> </p>
                </div>
              </div>

              
              <div className="carousel-item">
                <img src="images/img3.jpg" className="caro d-block w-100" alt="scared" style={{height:"697px", opacity:"95%"}}/>
                <div className="carousel-caption">
                  <h3>Donate</h3>
                  <p>Every single penny goes to the welfare.</p>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" type="button" data-target="#home" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" type="button" data-target="#home" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    )
}
export default Carousel;