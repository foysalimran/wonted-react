import React from 'react';
import data from "../data/herov1.json"

const Herov5 = () => {
    const {herov5} = data;
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
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="hero__content position-relative">
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
                  I am {herov5.name}
                </h1>
                <div
                  className="badge-text mb-4 fs-5 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                 {herov5.title}
                </div>
                <p
                  className="mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  {herov5.description}
                </p>
                <form
                  action="assets/subscribe/subscribe.php"
                  id="subscribe"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <div class="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="subscriber-email"
                    />
                    <button
                      class="button button__primary"
                      id="subscribe-button"
                    >
                      <span>{herov5.btn}</span>
                    </button>
                  </div>
                  <div class="result">
                    <p class="success-msg">
                      <i class="icofont-check"></i> Your email has been stored!
                    </p>
                    <p class="error-msg">
                      <i class="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                </form>
                {/* <!-- Mailchimp subscription form --> */}
                 {/* <form action="#" id="subscribe-mailchimp" data-wow-duration="1.5s">
                <input type="email" name="email"  placeholder="Your Email" class="input-box">
                <button type="submit" class="button button__primary">Subscribe</button>
                <div class="result">
                    <p class="success-msg"><i class="icofont-check"></i> You email has been stored!</p>
                    <p class="error-msg"><i class="icofont-close"></i> Sorry! Something went wrong!</p>
                </div>
              </form>  */}
              </div>
            </div>
            <div
              class="col-lg-6 d-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div class="hero__book">
                <div class="hero__book--wrapper">
                  <img class="img-fluid" src={herov5.bookImage} alt="" />
                </div>
              </div>
              <div class="hero__author text-center">
                <div class="hero__author--inner hero__author--inner2">
                  <div
                    class="hero__author--inner--pic hero__author--inner2--pic d-flex align-items-end justify-content-center"
                    style={{backgroundImage: `url(${herov5.writerImage})`}}
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

export default Herov5;