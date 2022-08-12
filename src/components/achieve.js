/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import data from "../data/achieve.json";

const Achieve = ({isBg}) => {
  const {achieve} = data;
  return (
    // <!-- ========== Achieve section start ========== -->
    <section id="benefits" className={`achieve section-padding  ${isBg === "yes" ? "bg-one": "" }`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {achieve.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {achieve.title}
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
                  <img className="img-fluid" src={achieve.image} alt="Achive Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="achieve__content">
              <div className="row">
                {/* <!-- achieve item start --> */}
                {achieve.achieveItem?.map((data, i) => (
                  <div key={i}
                  className="col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={(i + 2) * 50}
                >
                  <div className="achieve__content__item h-100 translateEffect2">
                    <div className="achieve__icon m-20px-b">
                      <img className="img-fluid"src={data.icon} alt="icon" width="40" height="40" />
                    </div>
                    <h3 className="m-15px-b">{data.title}</h3>
                    <p>
                      {data.description}
                    </p>
                  </div>
                </div>
                ))}
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
