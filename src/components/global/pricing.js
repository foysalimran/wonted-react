/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pricing = () => {
  return (
    // <!-- ========== Pricing section start ========== -->
    <section id="pricing" className="section-padding pricing bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Pricing
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Pricing based on their version
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* <!-- pricing table start --> */}
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="pricing__item translateEffect1">
              <h3 className="pricing__title">E-Book</h3>
              <h3 className="pricing__price">$05</h3>
              <ul className="pricing__list">
                <li>Complete Book</li>
                <li>PDF and EPUB</li>
                <li>Hardcover Book</li>
                <li>Access to Downloads</li>
              </ul>
              <a href="#" className="btn__secondary">
                <span>BUY NOW</span>
              </a>
            </div>
          </div>
          {/* <!-- pricing table end --> */}
          {/* <!-- pricing table start --> */}
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="pricing__item translateEffect1 active">
              <h3 className="pricing__title">Bundle</h3>
              <h3 className="pricing__price">$15</h3>
              <ul className="pricing__list">
                <li>Complete Book</li>
                <li>PDF and EPUB</li>
                <li>Hardcover Book</li>
                <li>Access to Downloads</li>
              </ul>
              <a href="#" className="button button__primary">
                <span>BUY NOW</span>
              </a>
            </div>
          </div>
          {/* <!-- pricing table end --> */}
          {/* <!-- pricing table start --> */}
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="pricing__item translateEffect1">
              <h3 className="pricing__title">Hardcover</h3>
              <h3 className="pricing__price">$10</h3>
              <ul className="pricing__list">
                <li>Complete Book</li>
                <li>PDF and EPUB</li>
                <li>Hardcover Book</li>
                <li>Access to Downloads</li>
              </ul>
              <a href="#" className="btn__secondary">
                <span>BUY NOW</span>
              </a>
            </div>
          </div>
          {/* <!-- pricing table end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Pricing section end ========== -->
  );
};

export default Pricing;
