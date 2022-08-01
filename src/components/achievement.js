import React from "react";
import achievementData from "../data/achievements.json";
const Achievement = () => {
const { achievements } = achievementData;

  return (
    // <!-- ========== Achievement section start ========== -->
    <section id="achievements" className="section-padding achievement bg-one">
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
          {achievements?.map((data) => (
            <div
              key={data.id}
              className="m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="achievement__item h-100 translateEffect1">
                <div className="row row-cols-2">
                  <div className="col mt-0">
                    <img
                      className="img-fluid"
                      src={data.image}
                      alt={data.title}
                    />
                  </div>
                  <div className="col mt-0">
                    <div className="achievement__content">
                      <div className="achievement__content__icon">
                        <i className="icofont-award"></i>
                      </div>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Achievement section end ========== -->
  );
};

export default Achievement;
