import React from "react";
import './IncubatorDashboard.css';
import YoutubeEmbed from "../../../../assets/vids/YoutubeEmbed.js";

const IncubatorDashboard = () => {
  return <div>
      <div className="page-section">
        <div className="container dashboard bg-primary">
          <div className="text-center">
            <h1 className="dash-title">
              Services we provide for Incubators/Accelerators
            </h1>
            <h2>Connect directly with</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center img-border">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/founder.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Founders</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/investors.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Investors</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/mentors.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Mentors</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/jobs.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Job Careers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="pricing" class="section-padding bg-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 m-auto">
                    <div class="section-heading">
                        <h4 class="section-title">Affordable pricing plans meant for you</h4>
                        <p>We have different type of pricing table to choose with your need. Check which one is most suitable for you and your business purpose. </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="pricing-block ">
                        <div class="price-header">
                            <i class="icofont-diamond"></i>

                            <h4 class="price"><small></small>Basic(For starters)</h4>
                            <h5>Monthly Plan</h5>
                        </div>
                        <div class="line"></div>
                        <ul>
                            <li>Get Incubation for a month</li>
                            <li>Lifetime Benefits</li>
                            <li>Gain insights and knowledge</li>
                            <li>Learn about different breadths of business</li>
                            <li>Access to Cloud Storage</li>
                            <li>Online Tutorials for a successful startup</li>
                            <li>24x7 Great Support</li>
                            <li>Monthly Reports and Analytics</li>
                        </ul>

                        <a href="#" class="btn btn-hero btn-circled">select plan</a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="pricing-block ">
                        <div class="price-header">
                            <i class="icofont-rocket-alt-1"></i>

                            <h4 class="price"><small></small>Standard Plan</h4>
                            <h5>Quarterly pack</h5>
                        </div>
                        <div class="line"></div>
                        <ul>
                            <li>Incubation for 3 months</li>
                            <li>Periodic support from mentors</li>
                            <li>Digital Marketing</li>
                            <li>Get analytics data once in a month</li>
                            <li>Access to cloud storage</li>
                            <li>Scalable Design</li>
                            <li>Learn more about funding</li>
                            <li>Support across different sectorss</li>
                        </ul>

                        <a href="#" class="btn btn-hero btn-circled">select plan</a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="pricing-block">
                        <div class="price-header">
                            <i class="icofont-light-bulb"></i>

                            <h4 class="price"><small></small>Premium Plan</h4>
                            <h5>Annual Pack</h5>
                        </div>
                        <div class="line"></div>
                        <ul>
                            <li>Incubation in best offices for 1 year</li>
                            <li>Unlimited mentor support</li>
                            <li>Support in marketing deliverables</li>
                            <li>Get latest insights</li>
                            <li>Develop a more scalable business</li>
                            <li>Product design</li>
                            <li>24x7 Great Support</li>
                            <li>Monthly Reports and Analytics</li>
                        </ul>

                        <a href="#" class="btn btn-hero btn-circled">select plan</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-12 col-md-8 mb-4">
                    <h3 class="mb-3"><div>{"We’re Innovators & <br />SEO Marketing Agency"}</div></h3>
                    <p class="mb-4">We provide marketing services to startups and small businesses to looking for a partner for their digital media, design-dev, lead generation</p>

                    <span class="h5 mb-4">Let's Check what we do actually :</span>
                    <ul class="about-list2 my-4">
                        <li class="mb-2"><i class="icofont icofont-check-circled"></i> Best Analytics Audits to your site in specific niche</li>

                        <li class="mb-2">
                            <i class="icofont icofont-check-circled"> </i> Modern Keyword Analysis to keep up to date
                        </li>

                        <li class="mb-2">
                            <i class="icofont icofont-check-circled"> </i> More quality content, social networking and relative sharing
                        </li>

                        <li class="mb-2">
                            <i class="icofont icofont-check-circled"> </i> Social - networking and relative sharing More quality content, 
                        </li>
                    </ul>

                    <a href="#" class="mt-3 d-inline-block">Learn more about us <i class="fa fa-angle-right"></i></a>
                </div>

                <div class="col-lg-6 col-md-4">
                    <img src="images/about/about-4.jpg" alt="" class="img-fluid w-100"/>
                </div>
            </div>
        </div>
    </section>



    <section id="counter" class="section-padding">
    <div class="overlay dark-overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-heart"></i>
                    <span class="counter">20+</span>
                    <h5>Startups Created</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-rocket"></i>
                    <span class="counter">100+</span>
                    <h5> Satisfied Clients</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-hand-power"></i>
                    <span class="counter">$1B+</span>
                    <h5>Business Impact</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-shield-alt"></i>
                    <span class="counter">1000+</span>
                    <h5>Jobs Created</h5>
                </div>
            </div>
        </div>
    </div>
</section>


      <div>
        <h2 className="Videos">Incubator Videos</h2>
        <div className="App">
          <ol>
            <li>
              <h4>Who are Incubators and Accelerators?</h4>
            </li>
            <YoutubeEmbed embedId="9MznBL37ayk" />

            <li>
              <h4> 5 Steps for your Startup-Incubators and Accelerators </h4>
            </li>
            <YoutubeEmbed embedId="C_g1xr2XG98" />
          </ol>
        </div>
      </div>
  </div>;
};

export default IncubatorDashboard;
