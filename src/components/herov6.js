import React from "react";

const Herov6 = () => {
  return (
    //  <!-- ========== Hero section start ========== -->
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
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="hero__content position-relative">
              <h1
                class="display-4 mb-2 text-capitalize"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                John Smith.
              </h1>
              <div
                class="badge-text fs-5 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
              >
                Finance management book writer
              </div>
              <p
                class="mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                I'm creative book writer based in Boston, and I'm very
                passionate and dedicate about my writings.
              </p>
              <a
                href="#author"
                class="button button__primary me-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="850"
              >
                <span>Awarded books</span>
              </a>
              <a
                href="https://youtu.be/qg0_FinB6EE"
                class="glightbox3 btn__secondary"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <i class="icofont-play-alt-2"></i> About me
              </a>
            </div>
          </div>
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <div class="hero__author text-center">
              <div class="hero__author--inner3">
                <div class="hero__author--inner3--wrapper">
                  <img
                    width="500"
                    class="img-fluid"
                    src="assets/images/writer-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov6;
