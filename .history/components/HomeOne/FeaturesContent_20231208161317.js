import React from "react";
import Link from "next/link";

const FeaturesContent = () => {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                {/* <span>Our Unique Value Proposition</span> */}
                <h3>Let us transform your idea into product</h3>
                <p>
                  Breaking boundaries is our forte. Whether it's in the lines of
                  code we write or the solutions we provide, We redefine
                  possibilities, transforming challenges into opportunities that
                  push the limits of what's achievable.
                </p>

                <div className="features-btn">
                  <Link href="#" className="features-btn-one">
                    More Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f1eff8">
                    <div className="icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>
                      UI/UX Design, Frontend Web App Dev, Backend API and Web
                      Service, Hosting and Deployment
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-analytics"></i>
                    </div>
                    <h3>AI and Data Science</h3>
                    <p>
                      From Exploratory Data Analysis (EDA) to Machine and Deep
                      Learning Models, along with Chatbot and AI-powered Web
                      Services
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-laptop"></i>
                    </div>
                    <h3>Mobile Application Development</h3>
                    <p>
                      With our expertise in Android and iOS Application
                      Development. We bring your ideas to life, t
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f8e1eb">
                    <div className="icon">
                      <i className="flaticon-analysis-1"></i>
                    </div>
                    <h3>Blockchain Technologies</h3>
                    <p>Decentralized Application, Smart Contract Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <img src="/images/shape/8.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/5.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesContent;
