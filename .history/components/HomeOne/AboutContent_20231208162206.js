import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section">
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
                <h3>Innovation in Technology</h3>
                <strong>
                  We don't just navigate the tech landscape; we shape it.
                </strong>
                <p>
                  At Bimaun Technologies, we are not just a tech startup; we are
                  architects of the future. Fueled by a fervor for innovation,
                  we embark on a mission to redefine the technological
                  landscape. Our dynamic team thrives on the pulse of progress,
                  constantly seeking solutions that push boundaries and set new
                  standards.
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
