/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import about from "../../assets/images/achive.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPlay } from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/io";

const Author = () => {
  return (
    // <!-- ========== Author section start ========== -->
    <section id="author" className="section-padding authorv2">
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
        <div className="row gx-5">
          {/* <!-- author image area start --> */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <img className="img-fluid" src={about} alt="Author Image" />
              <a
                href="https://youtu.be/qg0_FinB6EE"
                className="glightbox3 video-btn"
              >
                <FaPlay />
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
          {/* <!-- author image area end --> */}
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>
              Based on wikipedia, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio aspernatur quam in nostrum aliquam
              eligendi vel, modi cupiditate numquam officiis dicta minima
              placeat nulla impedit voluptatum adipisci beatae. Rerum, impedit.
            </p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                  <div className="col-6 mb-3">
                    <h4>Name:</h4>
                    <p className="mb-0">Jacob Thomas</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Born:</h4>
                    <p className="mb-0">05. 16. 1992</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Country:</h4>
                    <p className="mb-0">US</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Email ID:</h4>
                    <p className="mb-0">info@wonted.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h4>Languages:</h4>
                    <p className="mb-0">English, French</p>
                  </div>
                  <div className="col-6">
                    <h4>Address:</h4>
                    <p className="mb-0">Etowah, TN 37331 United States</p>
                  </div>
                </div>
              </div>
              <ul className="social-icon mt-3">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Author;
