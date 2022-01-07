import React from 'react';
import '../index.css';


const Faq = () => {
    return (
        <div className="bs-example" id="faq">
              <h2 className="text-center">Frequently Asked Questions</h2>
              <div className="accordion acc" id="accordionExample">
                  <div className="card">
                      <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                              <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i className="fa fa-plus"></i> Who's the founder and what was the idea  behind establishing this organization for orphans?</button>									
                          </h2>
                      </div>
                      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                              <p>The founders of our deemed organization are <b>Sharat, Chetan</b> and <b>Vaibhav</b>. One of the founders had a strong desire to do something for the needy or the poor and this lead the foundation stone of <i>New Hope: A Non-Profit Organization for Orphaned Children</i>.  <a href="#about">Learn more.</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="fa fa-plus"></i> When was 'New Hope' established?</button>
                          </h2>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                              <p>It was established in the month of <b>March, 2020.</b></p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="fa fa-plus"></i> How can you help an orphan reach us?</button>                     
                          </h2>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
                              <p>If you find a child who has no one to take care of, just contact our team for further details. We will answer to you  as soon as possible. <a href="ContactForm/contactform.html" target="_self">Learn more.</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"><i className="fa fa-plus"></i> Where are the orphanage homes of 'New Hope' located?</button>
                        </h2>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>We have orphanage homes in many countries like <b>India, USA, Nepal</b> and <b>UK</b> and we have multiple teams working in every country.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                      <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"><i className="fa fa-plus"></i> What resources do we provide to the orphans?</button>
                      </h2>
                  </div>
                  <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body">
                          <p>We take  care of everyone in our orphanage like they are at home. We provide them with everything including education, clothing, food, and other necessities.</p>
                      </div>
                  </div>
              </div>
              </div>
          </div>
    )
}
export default Faq;