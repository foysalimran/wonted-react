/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import data from "../data/about.json";

const Aboutv6 = () => {
  const { aboutv6 } = data;
  const [isOpen, setOpen] = useState(false);
  return (
    // <!-- ========== Author section start ========== -->
    <section id="about" className="section-padding authorv2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {aboutv6.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {aboutv6.title}
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
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <img
                className="img-fluid"
                src="assets/images/achive2.jpg"
                alt="Author Image"
              />
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="dkxiTpwm0hs"
                onClose={() => setOpen(false)}
              />

              <button onClick={() => setOpen(true)} className="video-btn">
                <img
                  className="img-fluid"
                  src={aboutv6.icon}
                  alt="icon"
                  width="25"
                  height="25"
                />
              </button>
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>
              Based on wikipedia, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio aspernatur quam in nostrum aliquam
              eligendi vel, modi cupiditate numquam officiis dicta minima
              placeat nulla impedit voluptatum adipisci beatae. Rerum, impedit.
            </p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                  <div className="col-6 mb-3">
                    <h4>Name:</h4>
                    <p className="mb-0">Jacob Thomas</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Born:</h4>
                    <p className="mb-0">05. 16. 1992</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Phone:</h4>
                    <p className="mb-0">+61 (0) 111 222 333</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Email ID:</h4>
                    <p className="mb-0">info@wonted.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Career started:</h4>
                    <p className="mb-0">2015</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Languages:</h4>
                    <p className="mb-0">English, French</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Country:</h4>
                    <p className="mb-0">US</p>
                  </div>
                  <div className="col-6">
                    <h4>Address:</h4>
                    <p className="mb-0">Etowah, TN 37331 United States</p>
                  </div>
                </div>
              </div>
              <ul className="social-icon mt-3">
                {aboutv6.social?.map((data, i) => (
                  <li key={i}>
                    {data.link === "" ? (
                      ""
                    ) : (
                      <a href={data.link}>
                        <img
                          className="img-fluid"
                          src={data.icon}
                          alt="icon"
                          width="25"
                          height="25"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Aboutv6;
