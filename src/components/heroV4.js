import React from 'react';

const HeroV4 = () => {
    return (
        <section
        id="hero"
        class="hero hero4 hero__padding overflow-hidden position-relative bg-one"
      >
        <div class="circle x1"></div>
        <div class="circle x2"></div>
        <div class="circle x3"></div>
        <div class="circle x4"></div>
        <div class="circle x5"></div>
        <div class="container">
          <div class="row gx-5 align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
              <div class="hero__content position-relative">
                <div
                  class="badge-text mb-2 fs-3 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  Hello,
                </div>
                <h1
                  class="display-4 mb-2 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  I am Sarah F.
                </h1>
                <div
                  class="badge-text mb-4 fs-5 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  Professional book writer
                </div>
                <p
                  class="mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  I am a professional books writer based on New York. I've
                  written over 12 books and 6 of them are new york times best
                  seller.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="950"
                >
                  <a href="#books" class="smooth button button__primary me-3">
                    <span>Latest books</span>
                  </a>
                  <a
                    href="https://youtu.be/qg0_FinB6EE"
                    class="glightbox3 btn__secondary"
                    ><i class="icofont-play-alt-2"></i> About me</a
                  >
                </div>
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div class="hero__author text-center">
                <div class="hero__author--inner">
                  <div
                    class="hero__author--inner--pic d-flex align-items-end justify-content-center"
                    style={{backgroundImage: "url(assets/images/writer.jpg)"}}
                  ></div>
                  <div class="frame frame-1"></div>
                  <div class="frame frame-2"></div>
                  <div class="frame frame-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroV4;