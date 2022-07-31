/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Author = () => {
  return (
    // <!-- ========== Author section start ========== -->
    <section id="author" className="section-padding author">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                About author
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Learn about the book writer
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- author image --> */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__image">
              <img
                className="img-fluid"
                src="assets/images/author.png"
                alt="Author Image"
              />
              <a
                href="https://youtu.be/qg0_FinB6EE"
                className="glightbox3 video-btn"
              >
                <i className="icofont-play"></i>
              </a>
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- author image end --> */}
          {/* <!-- author content start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__content">
              <h2 className="m-20px-b">Michale John</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nam eveniet veritatis aliquid harum temporibus et pariatur.
                Incidunt, labore voluptatum minima tenetur, consequatur odit
                sapiente blanditiis perferendis corrupti non quisquam?
              </p>
              <ul className="author__content__desc m-30px-b">
                <li>
                  <i className="icofont-check"></i>Achieved 10+ awarded
                </li>
                <li>
                  <i className="icofont-check"></i>Very passionate about writting
                </li>
                <li>
                  <i className="icofont-check"></i>Most Popular writter in the year
                </li>
                <li>
                  <i className="icofont-check"></i>17+ Books written
                </li>
              </ul>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- author content start --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Author;
