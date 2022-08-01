import React from 'react';

const Cta = () => {
    return (
        <section className="cta section-padding" id="cta">
        <div className="container">
          <div className="row justify-content-center cta__inner bg-one">
            <div className="col-lg-8">
              <div className="section-title-center mb-0 text-center">
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  >SUBSCRIBE NOW</span
                >
                <h2
                  className="display-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Get a free chapter of this book
                </h2>
              </div>
              <div className="cta-form-box">
                {/* subscription form start  */}
                <form action="assets/subscribe/subscribe.php" id="subscribe">
                  <div
                    className="mb13"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="250"
                  >
                    <input
                      className="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      id="subscriber-email"
                    />
                  </div>
                  <button
                    className="w-100 button button__primary align-items-center"
                    id="subscribe-button"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <span
                      >Subscribe Now <i className="icofont-arrow-right"></i
                    ></span>
                  </button>
                  <div className="result">
                    <p
                      className="success-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="350"
                    >
                      <i className="icofont-check"></i> Your email has been stored!
                    </p>
                    <p
                      className="error-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <i className="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                </form>
                 {/* Mailchimp subscription form  */}
                {/* <form
                  action="#"
                  id="subscribe-mailchimp"
                  data-wow-duration="1.5s"
                >
                  <div className="mb13" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                    <input
                      className="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-100 button button__primary align-items-center"
                     data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                  >
                    <span>Subscribe Now <i className="icofont-arrow-right"></i></span>
                  </button>
                  <div className="result">
                    <p className="success-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                      <i className="icofont-check"></i> Your email has been stored!
                    </p>
                    <p className="error-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                      <i className="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                  <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
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