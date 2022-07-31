import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from 'react-modal-video';

const Ctav4 = () => {
  const [isOpen, setOpen] = useState(false)

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
            <ModalVideo  channel='youtube' autoplay isOpen={isOpen} videoId="dkxiTpwm0hs" onClose={() => setOpen(false)} />
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
              <button onClick={()=> setOpen(true)}
                className="video-btn"
              >
                <FaPlay />
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
        </div>
      </div>
    </section>
    // <!-- ========== CTA v4 section end ========== -->
  );
};

export default Ctav4;
