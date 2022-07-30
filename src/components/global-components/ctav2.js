import React from "react";
import { FaPlay } from "react-icons/fa"

const Ctav2 = () => {
  return (
    // <!-- ========== CTA v4 section start ========== -->
    <section className="section-padding ctav4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 ctav4__content">
            <h3
              className="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              Watch the video
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              to see how our readers love it.
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
              Still have any doubts? Check the free chapter to get an idea.
            </p>
            <a
              href="#preview"
              className="smooth button button__primary"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <span>Free chapters</span>
            </a>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <div className="ctav4__video-btn">
              <a
                href="https://youtu.be/dkxiTpwm0hs"
                className="glightbox3 video-btn"
              >
                <FaPlay />
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
        </div>
      </div>
    </section>
    // <!-- ========== CTA v4 section end ========== -->
  );
};

export default Ctav2;
