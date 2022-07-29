import React from "react";
import heroImg from "../../assets/images/hero.png";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Hero = () => {
  return (
    // <!-- ========== Hero section start ========== -->
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
        <div className="row align-items-center">
          <div className="col-lg-6 m-0px-b md-m-30px-b">
            <div className="hero__content position-relative">
              <div
                className="badge-text mb-2 text-uppercase"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                Let's make the best investment
              </div>
              <h1
                className="display-4 mb-4 text-capitalize"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
              >
                There is no friend as loyal as a book
              </h1>
              <p
                className="text-muted mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                harum quibusdam, assumenda quia explicabo.
              </p>
              <form action="assets/subscribe/subscribe.php" id="subscribe">
                <div
                  className="input-group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
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
                    data-aos-delay="800"
                  >
                    <AiOutlineCheckCircle /> Your email has been stored!
                  </p>
                  <p
                    className="error-msg"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="850"
                  >
                    <AiOutlineCloseCircle /> Sorry! Something went wrong!
                  </p>
                </div>
              </form>
              {/* <form action="#" id="subscribe-mailchimp" data-wow-duration="1.5s">
                    <div className="input-group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750">
                      <input type="email" name="email" placeholder="Email" id="subscriber-email" />
                      <button className="button button__primary" id="subscribe-button">
                        <span>Subscribe</span>
                      </button>
                    </div>
                    <div className="result">
                        <p className="success-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"><AiOutlineCheckCircle /></AiOutlineCheckCircle> You email has been stored!</p>
                        <p className="error-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="850"><AiOutlineCloseCircle /> Sorry! Something went wrong!</p>
                    </div>
                  </form> */}
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="hero__images text-center">
              <img className="img-fluid" src={heroImg} alt="" />
              <div className="hero__images--badge">
                <span>
                  <span className="hero__images--badge--text1">NY</span>
                  <span className="hero__images--badge--text2">
                    best seller
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section start ========== -->
  );
};

export default Hero;
