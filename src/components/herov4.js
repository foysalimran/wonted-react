/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import data from "../data/herov1.json";
import { BiPlayCircle } from "react-icons/bi";
import $ from "jquery";
import GLightbox from "glightbox";
window.jQuery = $;

const Herov4 = () => {
  const { herov4 } = data;
  
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

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
                I am {herov4.name}
              </h1>
              <div
                className="badge-text mb-4 fs-5 fw-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                {herov4.title}
              </div>
              <p
                className="mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="850"
              >
                {herov4.description}
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="950"
              >
                <a href="#books" className="smooth button button__primary me-3">
                  <span>{herov4.firstBtn}</span>
                </a>

                <a href={herov4.videoURL} className="glightbox3 btn__secondary">
                  <BiPlayCircle />
                  {herov4.secondBtn}
                </a>
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
                  style={{ backgroundImage: `url(${herov4.image})` }}
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

export default Herov4;
