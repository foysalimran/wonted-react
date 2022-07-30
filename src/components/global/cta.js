import React from "react";
import { FaStar } from "react-icons/fa";

const Cta = () => {
  return (
    // <!-- ========== CTA v5 section start ========== -->
    <section className="section-padding ctav5">
      <div className="container">
        <div className="row">
          <div className="ctav5__content">
            <h2
              className="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              The book has 90900+ readers
            </h2>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <FaStar />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <FaStar />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <FaStar />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <FaStar />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <FaStar />
              </li>
            </ul>
            <p
              className="fs-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Readers reviews <br />
              is self explanatory – 5/5
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v5 section end ========== -->
  );
};

export default Cta;
