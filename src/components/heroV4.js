import React from 'react';

const HeroV4 = () => {
    return (
        <section
        id="hero"
        className="hero hero4 hero__padding overflow-hidden position-relative bg-one"
      >
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="hero__content position-relative">
                <div
                  className="badge-text mb-2 fs-3 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  Hello,
                </div>
                <h1
                  className="display-4 mb-2 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  I am Sarah F.
                </h1>
                <div
                  className="badge-text mb-4 fs-5 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  Professional book writer
                </div>
                <p
                  className="mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  I am a professional books writer based on New York. I've
                  written over 12 books and 6 of them are new york times best
                  seller.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="950"
                >
                  <a href="#books" className="smooth button button__primary me-3">
                    <span>Latest books</span>
                  </a>
                  <a
                    href="https://youtu.be/qg0_FinB6EE"
                    className="glightbox3 btn__secondary"
                    ><i className="icofont-play-alt-2"></i> About me</a
                  >
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div className="hero__author text-center">
                <div className="hero__author--inner">
                  <div
                    className="hero__author--inner--pic d-flex align-items-end justify-content-center"
                    style={{backgroundImage: "url(assets/images/writer.jpg)"}}
                  ></div>
                  <div className="frame frame-1"></div>
                  <div className="frame frame-2"></div>
                  <div className="frame frame-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroV4;