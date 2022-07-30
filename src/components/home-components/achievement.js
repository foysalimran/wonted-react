import React from "react";
import awards01 from "../../assets/images/awards/1.jpg";
import awards02 from "../../assets/images/awards/2.jpg";
import awards03 from "../../assets/images/awards/3.jpg";
import awards04 from "../../assets/images/awards/4.jpg";
import awards05 from "../../assets/images/awards/5.jpg";
import awards06 from "../../assets/images/awards/1.jpg";

const Achievement = () => {
  return (
    // <!-- ========== Achievement section start ========== -->
    <section id="achivements" className="section-padding achievement bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Achievements
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Awards Achieved for this book
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
        <div className="row row-cols-1 row-cols-md-2">
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards01} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Nominated</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards02} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Winner</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards03} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Guest of Honor</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards04} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Finalist</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards05} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Winner</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="achievement__item h-100 translateEffect1">
              <div className="row row-cols-2">
                <div className="col mt-0">
                  <img className="img-fluid" src={awards06} alt="" />
                </div>
                <div className="col mt-0">
                  <div className="achievement__content">
                    <div className="achievement__content__icon">
                      <i className="icofont-award"></i>
                    </div>
                    <h3>Nominated</h3>
                    <p>
                      International Thriller Writers Award for Best Novel (These
                      Toxic Things)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Achievement section end ========== -->
  );
};

export default Achievement;
