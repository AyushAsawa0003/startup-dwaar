import React from "react";
import './InvestorDashboard.css';
import YoutubeEmbed from "../../../../assets/vids/YoutubeEmbed.js";

const InvestorDashboard = () => {
  return <div>
    <div className="page-section">
        <div className="container dashboard bg-primary">
          <div className="text-center">
            <h1 className="dash-title">
              Services we provide for Investors
            </h1>
            <h2>Connect To</h2>
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
                    src={require("../../../../assets/img/incubators.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Incubators</h5>
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

      <section id="intro" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-md-12">
                    <div class="section-heading">
                        <h1 class="lead">Investment and Growth Together</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5  d-none d-lg-block col-sm-12">
                    <div class="intro-img">
                        <img src={require("../../../../assets/img/why-choose.png")} class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12 ">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box">
                                <span>01.</span>
                                <h4>Financial Growth</h4>
                                <p> Make small investments to gain larger returns in the long run seamlessly</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box">
                                <span>02.</span>
                                <h4>Collaborate</h4>
                                <p> Co-invest with other top investors and belong to the community of investors </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box">
                                <span>03.</span>
                                <h4>Diversified</h4>
                                <p>Invest and learn to diversify like a pro to create an excellent portfolio and complete transparency</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box">
                                <span>04.</span>
                                <h4>Startup Funding</h4>
                                <p> Access a personalized and curated list of startups meant just for you with rigorous analysis</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                           <div class="intro-cta">
                               <p class="lead">Still have any question on mind ? <a href="#contact" class="smoth-scroll">Contact us</a></p>
                           </div>
                        </div>
                    </div>
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
                    <span class="counter">10K+</span>
                    <h5>Platform Investors</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-rocket"></i>
                    <span class="counter">$5M+</span>
                    <h5> Funds Raised</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-hand-power"></i>
                    <span class="counter">20%</span>
                    <h5>Average IRR</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="counter-stat">
                    <i class="icofont icofont-shield-alt"></i>
                    <span class="counter">100+</span>
                    <h5>Startups Funded</h5>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="service-head" class=" bg-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-sm-12 m-auto">
                <div class="section-heading text-white">
                    <h4 class="section-title">Testimonials</h4>
                    <p> Trusted by more than hundred investors over the years</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="service">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src="images/icon/007-digital-marketing-3.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>John Doe</h4>
                            <p>The whole process was seamless and very easy. The best part of it is the actual annualised return on the investment. The whole process took ten minutes. I am extremely satisfied with the service and advice of Startup Dwaar.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box ">
                        <div class="service-img-icon">
                            <img src="images/icon/008-digital-marketing-2.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>Saul Goodman</h4>
                            <p>My advisor at Startup Dwaar helped me choose a portfolio which is suited to my specific profile and didn’t require anything other than a bank statement. I feel confident knowing that Startup Dwaar is managing my money.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src="images/icon/003-task.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>Ramprakash Sharma</h4>
                            <p>The team is extremely knowledgeable, professional and accessible. To date, I have not had to wait more than a working day for any query to be addressed. Setting up is very quick, and once established you have 24-7 access to your investment information.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src="images/icon/010-digital-marketing.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>Diya Mehra</h4>
                            <p>I experienced friendly, helpful and efficient service. My request was attended to in a very professional manner in the mentioned time and I believe this has contributed to performance. 
                              
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src="images/icon/006-analytics.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>Nicole Andrea</h4>
                            <p>The portfolio, meeting my conservative approach, has performed satisfactorily. Over the years I have varied the size of contributions into each of the portfolio funds according to inputs from Startup Dwaar and other market players.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src="images/icon/004-hiring.png" alt="service-icon" class="img-fluid"/>
                        </div>
                        <div class="service-inner">
                            <h4>Samar Khan </h4>
                            <p> I always get a speedy response when I have queries, which is a huge advantage in my busy life. Although I invest my money at my own risk I get expert advice which helps me a lot with my decisions.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <div>
        <h2 className="Videos">Investor Videos</h2>
        <div className="App">
          <ol>
            <li>
              <h4>How to raise funds for a startup</h4>
            </li>
            <YoutubeEmbed embedId="93LLYkn8wls" />

            <li>
              <h4>Step-by-Step guide to invest in startups in India</h4>
            </li>
            <YoutubeEmbed embedId="dBKGRLLUMes" />
          </ol>
        </div>
      </div>
  </div>;
};

export default InvestorDashboard;
