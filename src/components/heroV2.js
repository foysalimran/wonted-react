import React from 'react';
import heroImg from '../assets/images/book2.png'

import data from "../data/herov2.json"

const HeroV2 = () => {
  const {herov2} = data;
    return (
        <section
        id="hero"
        class="hero hero__padding overflow-hidden position-relative bg-one"
      >
        <div class="circle x1"></div>
        <div class="circle x2"></div>
        <div class="circle x3"></div>
        <div class="circle x4"></div>
        <div class="circle x5"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 col-lg-6 m-0px-b md-m-40px-b">
              <div class="hero__content position-relative">
                <h1
                  class="display-4 mb-4 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  {herov2.title}
                </h1>
                <p
                  class="text-muted mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                 {herov2.description}
                </p>
                <div 
                data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="950"
                >
                  <a
                  href="#pricing"
                  class="smooth button button__primary me-3"
                >
                  <span>{herov2.buyBtn}</span>
                </a>
                <a
                  href="https://youtu.be/dkxiTpwm0hs"
                  class="glightbox3 btn__secondary"
                  ><i class="icofont-play-alt-2"></i>{herov2.aboutBtn}</a
                >
                </div>
              </div>
            </div>
            <div
              class="col-md-5 offset-lg-1 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="850"
            >
              <div class="hero__images3">
                <img
                  width="400"
                  class="img-fluid"
                  src={herov2.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroV2;