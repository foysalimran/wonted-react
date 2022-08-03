import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import data from "../data/herov1.json";

const Herov3 = () => {
  const { herov3 } = data;
  const [isOpen, setOpen] = useState(false);

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
                {herov3.subtitle}
              </div>
              <h1
                className="display-4 mb-4 text-capitalize"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="850"
              >
                {herov3.title}
              </h1>
              <p
                className="text-muted mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                {herov3.description}
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
                className="img-fluid img"
                src={herov3.image}
                alt=""
              />
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="dkxiTpwm0hs"
                onClose={() => setOpen(false)}
              />
              <button
                onClick={() => setOpen(true)}
                href={herov3.videoURL}
                className="glightbox3 video-btn"
              >
                <img
                  className="img-fluid"
                  src={herov3.icon}
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
        </div>
      </div>
    </section>
  );
};

export default Herov3;
