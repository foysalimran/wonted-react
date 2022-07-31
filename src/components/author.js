/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Author = () => {
  return (
    // <!-- ========== Author section start ========== -->
    <section id="author" class="section-padding author">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div class="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                About author
              </span>
              <h2
                class="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Learn about the book writer
              </h2>
              <div
                class="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- author image --> */}
          <div
            class="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="author__image">
              <img
                class="img-fluid"
                src="assets/images/author.png"
                alt="Author Image"
              />
              <a
                href="https://youtu.be/qg0_FinB6EE"
                class="glightbox3 video-btn"
              >
                <i class="icofont-play"></i>
              </a>
              <div class="promo-video">
                <div class="waves-block">
                  <div class="waves wave-1"></div>
                  <div class="waves wave-2"></div>
                  <div class="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- author image end --> */}
          {/* <!-- author content start --> */}
          <div
            class="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="author__content">
              <h2 class="m-20px-b">Michale John</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nam eveniet veritatis aliquid harum temporibus et pariatur.
                Incidunt, labore voluptatum minima tenetur, consequatur odit
                sapiente blanditiis perferendis corrupti non quisquam?
              </p>
              <ul class="author__content__desc m-30px-b">
                <li>
                  <i class="icofont-check"></i>Achieved 10+ awarded
                </li>
                <li>
                  <i class="icofont-check"></i>Very passionate about writting
                </li>
                <li>
                  <i class="icofont-check"></i>Most Popular writter in the year
                </li>
                <li>
                  <i class="icofont-check"></i>17+ Books written
                </li>
              </ul>
              <ul class="social-icon">
                <li>
                  <a href="#">
                    <i class="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-whatsapp"></i>
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
