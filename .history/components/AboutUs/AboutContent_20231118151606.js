import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>About Us</span>
                <h3>
                  We are innovative and dynamic startup driven by passion to
                  shape the digital world for good
                </h3>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna aliqua.
                </strong>
                <p>
                  At Bimaun Technologies, we are more than just a tech startup.
                  We are pioneers shaping the future. Driven by a passion for
                  innovation, we are on a journey to rewrite the technological
                  landscape. Our vibrant team thrives on the edge of progress,
                  relentlessly pursuing solutions that break barriers and set
                  new benchmarks.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
