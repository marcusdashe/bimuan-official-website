import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>(234) 704 4642 115</p>
                <p>(234) 803 4477 604</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h4>E-mail</h4>
                <p>bimaun.tech@gmail.com</p>
                <p>marcusdashe.developer@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>
                  Hossanah Business Plaza, No. B11 Jos Road, Jos South, Plateau
                  State Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
