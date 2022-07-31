/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { ImBook } from "react-icons/im";
import achive2 from "../assets/images/achive2.jpg";
import { GiHappySkull, GiStairsGoal } from "react-icons/gi";
import { BiTargetLock } from "react-icons/bi";

const Achieve = () => {
  return (
    // <!-- ========== Achieve section start ========== -->
    <section id="benefits" className="achieve section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Why wonted?
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                What you'll achieve by this book
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
          <div
            className="col-lg-6 mb-3 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-sm-12">
                <div className="achieve__image">
                  <img className="img-fluid" src={achive2} alt="Achive Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="achieve__content">
              <div className="row">
                {/* <!-- achieve item start --> */}
                <div
                  className="col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="achieve__content__item h-100 translateEffect2">
                    <div className="achieve__icon m-20px-b">
                      <ImBook />
                    </div>
                    <h3 className="m-15px-b">Experience</h3>
                    <p>
                      Lorem ipsum dolor sit amet ametus conso tetur ading elitor
                      fugit piatur iusto provid.
                    </p>
                  </div>
                </div>
                {/* <!-- achieve item end --> */}
                {/* <!-- achieve item start --> */}
                <div
                  className="col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div className="achieve__content__item h-100 translateEffect2">
                    <div className="achieve__icon m-20px-b">
                      <GiHappySkull />
                    </div>
                    <h3 className="m-15px-b">Motivation</h3>
                    <p>
                      Lorem ipsum dolor sit amet ametus conso tetur ading elitor
                      fugit piatur iusto provid.
                    </p>
                  </div>
                </div>
                {/* <!-- achieve item end --> */}
                {/* <!-- achieve item start --> */}
                <div
                  className="col-sm-6 mb-4 mb-sm-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <div className="achieve__content__item h-100 translateEffect2">
                    <div className="achieve__icon m-20px-b">
                      <GiStairsGoal />
                    </div>
                    <h3 className="m-15px-b">Goals</h3>
                    <p>
                      Lorem ipsum dolor sit amet ametus conso tetur ading elitor
                      fugit piatur iusto provid.
                    </p>
                  </div>
                </div>
                {/* <!-- achieve item end --> */}
                {/* <!-- achieve item start --> */}
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <div className="achieve__content__item h-100 translateEffect2">
                    <div className="achieve__icon m-20px-b">
                      <BiTargetLock />
                    </div>
                    <h3 className="m-15px-b">Vision</h3>
                    <p>
                      Lorem ipsum dolor sit amet ametus conso tetur ading elitor
                      fugit piatur iusto provid.
                    </p>
                  </div>
                </div>
                {/* <!-- achieve item end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Achieve section end ========== -->
  );
};

export default Achieve;
