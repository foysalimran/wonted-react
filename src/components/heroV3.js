import React from 'react';

import heroImg from '../assets/images/book2.png'

const HeroV3 = () => {
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
          <div class="row gx-5 align-items-center">
            <div class="col-md-7 mb-4 mb-md-0">
              <div class="hero__content position-relative">
                <div
                  class="badge-text mb-2 text-uppercase"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  Let's make the best investment
                </div>
                <h1
                  class="display-4 mb-4 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  Read more and make success the result of perfection.
                </h1>
                <p
                  class="text-muted mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="900"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  harum quibusdam, assumenda quia explicabo.
                </p>
              </div>
            </div>
            <div
              class="col-md-5 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="850"
            >
              <div class="hero__images4 text-center">
                <img
                  width="400"
                  class="img-fluid"
                  src={heroImg}
                  alt=""
                />
                <a
                  href="https://youtu.be/ksImBkJNQt8"
                  class="glightbox3 video-btn"
                >
                  <i class="icofont-play"></i
                ></a>
                <div class="promo-video">
                  <div class="waves-block">
                    <div class="waves wave-1"></div>
                    <div class="waves wave-2"></div>
                    <div class="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroV3;