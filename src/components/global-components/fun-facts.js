import React from "react";
import CountUp from 'react-countup';

const FunFacts = () => {
  return (
    // <!-- ========== Fun facts section start ========== -->
    <section className="section-padding counters">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                AWESOME STATS
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                All Milestones Achieved
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
          <div className="col-md-12">
            <ul className="counters__stats m-0 p-0 d-flex flex-wrap align-items-center justify-content-center">
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="counters__stats-box h-100 translateEffect1">
                  <div className="counters__stats-icon">
                    <i className="icofont-page"></i>
                  </div>
                  <div className="counters__stats-box__number">
                  <CountUp end={35} enableScrollSpy="true" />
                  </div>
                  <h5>Achievements</h5>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="counters__stats-box h-100 translateEffect1">
                  <div className="counters__stats-icon">
                    <i className="icofont-read-book"></i>
                  </div>
                  <div className="counters__stats-box__number">
                    <CountUp end={9999} enableScrollSpy="true" />+
                  </div>
                  <h5>Active Readers</h5>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="counters__stats-box h-100 translateEffect1">
                  <div className="counters__stats-icon">
                    <i className="icofont-hour-glass"></i>
                  </div>
                  <div className="counters__stats-box__number">
                  <CountUp end={41} enableScrollSpy="true" />k
                  </div>
                  <h5>Writing Hours</h5>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="counters__stats-box h-100 translateEffect1">
                  <div className="counters__stats-icon">
                    <i className="icofont-cart-alt"></i>
                  </div>
                  <div className="counters__stats-box__number">
                  <CountUp end={992} enableScrollSpy="true" />k
                  </div>
                  <h5>Total Sells</h5>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="counters__stats-box h-100 translateEffect1">
                  <div className="counters__stats-icon">
                    <i className="icofont-award"></i>
                  </div>
                  <div className="counters__stats-box__number">
                  <CountUp end={20} enableScrollSpy="true" />
                  </div>
                  <h5>Awards</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Fun facts section end ========== -->
  );
};

export default FunFacts;
