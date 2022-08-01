import React from "react";

import img1 from '../assets/images/awards/1.jpg'
import img2 from '../assets/images/awards/2.jpg'
import img3 from '../assets/images/awards/3.jpg'
import img4 from '../assets/images/awards/4.jpg'
import img5 from '../assets/images/awards/5.jpg'

import {GiTrophy} from "react-icons/gi"

const AchievementV2 = () => {
  return (
    <section id="achievement" className="section-padding achievement bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Author Achievements
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Honor & Awards Achieved
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
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
          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
                  </div>
                  <h3>Guest of Honor</h3>
                  <p>
                    {" "}
                    International Thriller Writers Award for Best Novel (These
                    Toxic Things){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
                  </div>
                  <h3>Nominated</h3>
                  <p>
                    {" "}
                    International Thriller Writers Award for Best Novel (These
                    Toxic Things){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img4}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
                  </div>
                  <h3>Winner</h3>
                  <p>
                    {" "}
                    International Thriller Writers Award for Best Novel (These
                    Toxic Things){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img5}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
                  </div>
                  <h3>Finalist</h3>
                  <p>
                    {" "}
                    International Thriller Writers Award for Best Novel (These
                    Toxic Things){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="card h-100 translateEffect1">
              <img
                src={img2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="achievement__content">
                  <div className="achievement__content__icon">
                    <GiTrophy />
                  </div>
                  <h3>Nominated</h3>
                  <p>
                    {" "}
                    International Thriller Writers Award for Best Novel (These
                    Toxic Things){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementV2;
