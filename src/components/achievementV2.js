import React from "react";

import img1 from '../assets/images/awards/1.jpg'
import img2 from '../assets/images/awards/2.jpg'
import img3 from '../assets/images/awards/3.jpg'
import img4 from '../assets/images/awards/4.jpg'
import img5 from '../assets/images/awards/5.jpg'

import {GiTrophy} from "react-icons/gi"
import data from "../data/achievements.json"

const AchievementV2 = () => {
  const {achievements} = data;
  return (
    <section id="achievement" class="section-padding achievement bg-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div class="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Author Achievements
              </span>
              <h2
                class="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Honor & Awards Achieved
              </h2>
              <div
                class="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img1}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img2}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img3}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img4}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img5}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
            class="col m-30px-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div class="card h-100 translateEffect1">
              <img
                src={img2}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="achievement__content">
                  <div class="achievement__content__icon">
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
