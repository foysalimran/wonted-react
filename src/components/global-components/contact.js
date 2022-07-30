/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/io";

const Contact = () => {
  return (
    // <!-- ========== Contact section start ========== -->
    <section id="contact" className="p-80px-tb bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Contact
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Write me anything
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
          {/* <!--  contact form area start --> */}
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact-form-box">
              <form id="contact-form" method="post" action="php/sendmail.php">
                <div className="message col">
                  <p className="email-loading alert alert-warning">
                    <img src="assets/images/loading.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;Sending...
                  </p>
                  <p className="email-success alert alert-success">
                    <i className="icofont-check-circled"></i> Your quote has
                    successfully been sent.
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icofont-close-circled"></i> Something went wrong!
                  </p>
                </div>
                <div className="mb13">
                  <input
                    name="name"
                    className="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="mb13">
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="mb13">
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="mb30">
                  <textarea
                    name="message"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required=""
                  ></textarea>
                </div>
                <button className="button button__primary align-items-center">
                  <span>Send Now</span>
                </button>
              </form>
            </div>
          </div>
          {/* <!--  contact form area end --> */}
          {/* <!-- contact information start --> */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact__address p-30px">
              <ul className="contact__address__content">
                <li>
                  <span>Address:</span>16, Lankaway <br />
                  Florida, USA 99544
                </li>
                <li>
                  <span>Phone:</span>
                  <a href="tel:1124447900">112 444 7900</a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="#">support@support.com</a>
                </li>
              </ul>
              <h4>Connect book socials</h4>
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
          {/* <!-- contact information end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;
