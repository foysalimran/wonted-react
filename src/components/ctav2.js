import React from "react";

const Ctav2 = () => {
  return (
    // <!-- ========== CTA v2 section start ========== -->
    <section id="cta2" className="cta2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="cta2__wrapper">
              <div className="section-title text-left">
                <span
                  className="badge-text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                >
                  SUBSCRIBE NOW
                </span>
                <h2
                  className="display-6 m-20px-b"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Get a free chapter of this book
                </h2>
              </div>
              <div className="cta2__form">
                {/* <!-- subscription form start --> */}
                <form action="assets/subscribe/subscribe.php" id="subscribe">
                  <div
                    className="input-group"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="subscriber-email"
                    />
                    <button
                      className="button button__primary"
                      id="subscribe-button"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
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
                {/* <!-- Mailchimp subscription form --> */}
                {/* <!-- <form action="#" id="subscribe-mailchimp" data-wow-duration="1.5s">
                    <div className="input-group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <input type="email" name="email" placeholder="Email" id="subscriber-email" />
                    <button className="button button__primary" id="subscribe-button">
                      <span>Subscribe</span>
                    </button>
                  </div>
                    <div className="result">
                      <p className="success-msg"><i className="icofont-check"></i> You email has been stored!</p>
                      <p className="error-msg"><i className="icofont-close"></i> Sorry! Something went wrong!</p>
                    </div>
                </form> --> */}
                {/* <!-- subscription form end --> */}
                <p
                  className="m-10px-t"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="450"
                >
                  <small>* eBook includes iBooks, PDF & ePub versions</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v2 section end ========== -->
  );
};

export default Ctav2;
