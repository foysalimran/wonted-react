import React from 'react';

import heroImg from '../assets/images/book2.png'

const HeroV3 = () => {
    return (
        <section
        id="hero"
        className="hero hero__padding overflow-hidden position-relative bg-one"
      >
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="hero__content position-relative">
                <div
                  className="badge-text mb-2 text-uppercase"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  Let's make the best investment
                </div>
                <h1
                  className="display-4 mb-4 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  Read more and make success the result of perfection.
                </h1>
                <p
                  className="text-muted mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="900"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  harum quibusdam, assumenda quia explicabo.
                </p>
              </div>
            </div>
            <div
              className="col-md-5 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="850"
            >
              <div className="hero__images4 text-center">
                <img
                  width="400"
                  className="img-fluid"
                  src={heroImg}
                  alt=""
                />
                <a
                  href="https://youtu.be/ksImBkJNQt8"
                  className="glightbox3 video-btn"
                >
                  <i className="icofont-play"></i
                ></a>
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroV3;