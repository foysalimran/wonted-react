import React from "react";
import data from "../data/cta.json";

const CtaV3 = () => {
  const {ctav3} = data;
  return (
    // <!-- ========== CTA v3 section start ========== -->
    <section id="ctav3" className="ctav3 bg-one p-80px-t">
      <div className="container bg-one">
        <div className="row">
          <div className="ctav3__content">
            <h2
              className="m-25px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              {ctav3.title1} <br />
              {ctav3.title2}
            </h2>
            <h2
              className="display-4 m-25px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <a href="tel:610383766284">{ctav3.number}</a>
            </h2>
            <a
              href="#contact"
              className="smooth button button__primary"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <span>{ctav3.btnText}</span>
            </a>
            <div className="ctav3__content__icon">
              <i className="icofont-read-book"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v3 section end ========== -->
  );
};

export default CtaV3;
