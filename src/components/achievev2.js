/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImBook } from "react-icons/im";
import { GiHappySkull, GiStairsGoal } from "react-icons/gi"

const Achievev2 = () => {
  return (
    // <!-- ========== Benefits section start ========== -->
    <section id="benefits" className="achivev2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title-left text-center text-lg-start">
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                What you'll achieve by this book
              </h2>
              <p
                className="text-muted mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetuer laoreet dolore magna.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- benefits items start --> */}
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="achivev2__item h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
              <ImBook />
              </div>
              <h3 className="m-15px-b">Experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" className="link">
                Read more<i className="icofont-rounded-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- benefits items end --> */}
          {/* <!-- benefits items start --> */}
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="achivev2__item-2 h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
              <GiHappySkull />
              </div>
              <h3 className="m-15px-b">Motivation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" className="link">
                Read more<i className="icofont-rounded-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- benefits items end --> */}
          {/* <!-- benefits items start --> */}
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="achivev2__item-3 h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
                <GiStairsGoal />
              </div>
              <h3 className="m-15px-b">Goals</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" className="link">
                Read more<i className="icofont-rounded-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- benefits items end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Benefits section end ========== -->
  );
};

export default Achievev2;
