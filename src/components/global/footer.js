/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/io";
import logo from "../../assets/images/wonted-logo.png"
import CtaV3 from "../ctaV3";

const Footer = () => {
  return (
    <>
   <CtaV3 />
    <footer className="footer bg-one overflow-hidden">
      <div className="container">
        <div className="footer__top m-50px-t m-50px-b">
          <div className="row">
            <div
              className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              <a href="index.html">
                {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
                <img src={logo} alt="Wonted" />
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
              <ul className="footer__menu">
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a href="#hero" className="smooth">
                    Home
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                >
                  <a href="#benefits" className="smooth">
                    Benefits
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <a href="#chapters" className="smooth">
                    Chapters
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <a href="#pricing" className="smooth">
                    Pricing
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="450"
                >
                  <a href="#author" className="smooth">
                    Author
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <a href="#achievement">Achievement</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="550"
                >
                  <a href="#reviews" className="smooth">
                    Reviews
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <a href="#contact" className="smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-end">
              <ul className="social-icon">
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="650"
                >
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  <a href="#">
                    <IoLogoWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__copyright m-20px-t m-20px-b">
          <div className="row">
            <div className="col-12">
              <p className="m-0 text-center">
                &copy; 2022 All right reserved. Made with
                <FaHeart /> by <a href="#">ThemeAtelier</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    // <!-- ========== Footer section End ========== -->
  );
};

export default Footer;
