import React from 'react';

const Cta = () => {
    return (
        <section class="cta section-padding" id="cta">
        <div class="container">
          <div class="row justify-content-center cta__inner bg-one">
            <div class="col-lg-8">
              <div class="section-title-center mb-0 text-center">
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  >SUBSCRIBE NOW</span
                >
                <h2
                  class="display-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Get a free chapter of this book
                </h2>
              </div>
              <div class="cta-form-box">
                {/* subscription form start  */}
                <form action="assets/subscribe/subscribe.php" id="subscribe">
                  <div
                    class="mb13"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="250"
                  >
                    <input
                      class="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      id="subscriber-email"
                    />
                  </div>
                  <button
                    class="w-100 button button__primary align-items-center"
                    id="subscribe-button"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <span
                      >Subscribe Now <i class="icofont-arrow-right"></i
                    ></span>
                  </button>
                  <div class="result">
                    <p
                      class="success-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="350"
                    >
                      <i class="icofont-check"></i> Your email has been stored!
                    </p>
                    <p
                      class="error-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <i class="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                </form>
                 {/* Mailchimp subscription form  */}
                {/* <form
                  action="#"
                  id="subscribe-mailchimp"
                  data-wow-duration="1.5s"
                >
                  <div class="mb13" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                    <input
                      class="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-100 button button__primary align-items-center"
                     data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                  >
                    <span>Subscribe Now <i class="icofont-arrow-right"></i></span>
                  </button>
                  <div class="result">
                    <p class="success-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                      <i class="icofont-check"></i> Your email has been stored!
                    </p>
                    <p class="error-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                      <i class="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                  <p class="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                    * eBook includes iBooks, PDF &amp; ePub versions
                  </p>
                </form>  */}
                {/* <!-- subscription form end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Cta;