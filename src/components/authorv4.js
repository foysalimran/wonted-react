/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../data/about.json";

const Authorv4 = () => {
  const { aboutv4 } = data;
  return (
    // <!-- ========== Author section start ========== -->
    <section id="author" className="section-padding authorv2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {aboutv4.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {aboutv4.title}
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
        <div className="row gx-5">
          {/* <!-- author image area start --> */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <img className="img-fluid" src={aboutv4.image} alt="Author Image" />
              <a
                href="https://youtu.be/qg0_FinB6EE"
                className="glightbox3 video-btn"
              >
                <img
                  className="img-fluid"
                  src={aboutv4.icon}
                  alt="icon"
                  width="25"
                  height="25"
                />
              </a>
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- author image area end --> */}
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>{aboutv4.description}</p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                  {aboutv4.userinfo?.map((data, i) => (
                    <div key={i} className="col-6 mb-3">
                      <h4>{data.title}</h4>
                      <p className="mb-0">{data.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="social-icon mt-3">
                {aboutv4.social?.map((data, i) => (
                  <li key={i}>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={data.icon}
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Authorv4;
