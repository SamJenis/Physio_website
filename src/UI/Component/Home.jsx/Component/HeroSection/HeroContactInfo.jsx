import React from 'react';
import AOS from 'aos';
import ExpertIcon from '../../../../../assets/images/icon-home-contact-us-1.svg'
import EmergencyIcon from '../../../../../assets/images/icon-home-contact-us-2.svg'
import consultantIcon from '../../../../../assets/images/icon-home-contact-us-3.svg'

const HeroContactUs = () => {

  React.useEffect(() => {
    AOS.init({duration:4000})
  }, []);

  return (
    <div className="home-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="home-contact-item" data-aos="fade-left" data-aos-duration="2200">
              <div className="icon-box">
                <img src={ExpertIcon} alt="ExpertIcon" />
              </div>
              <div className="home-contact-content">
                <h3>Expert Therapists</h3>
                <p>Our team of licensed and certified physiotherapists</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="home-contact-item" >
              <div className="icon-box">
                <img src={EmergencyIcon} alt="EmergencyIcon" />
              </div>
              <div className="home-contact-content">
                <h3>Emergency Service</h3>
                <p>Our emergency physiotherapy services are designed to address</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="home-contact-item" data-aos="fade-right" data-aos-duration="2200">
              <div className="icon-box">
                <img src={consultantIcon} alt="consultantIcon" />
              </div>
              <div className="home-contact-content">
                <h3>Free Consultant</h3>
                <p>Our mission is to enhance the quality of life of our patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContactUs;