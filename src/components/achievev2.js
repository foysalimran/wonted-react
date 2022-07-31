/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImBook } from "react-icons/im";
import { GiHappySkull, GiStairsGoal } from "react-icons/gi"

const Achievev2 = () => {
  return (
    // <!-- ========== Benefits section start ========== -->
    <section id="benefits" class="achivev2 section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title-left text-center text-lg-start">
              <h2
                class="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                What you'll achieve by this book
              </h2>
              <p
                class="text-muted mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetuer laoreet dolore magna.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          {/* <!-- benefits items start --> */}
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="achivev2__item h-100 translateEffect1">
              <div class="achieve__icon m-20px-b">
              <ImBook />
              </div>
              <h3 class="m-15px-b">Experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" class="link">
                Read more<i class="icofont-rounded-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- benefits items end --> */}
          {/* <!-- benefits items start --> */}
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div class="achivev2__item-2 h-100 translateEffect1">
              <div class="achieve__icon m-20px-b">
              <GiHappySkull />
              </div>
              <h3 class="m-15px-b">Motivation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" class="link">
                Read more<i class="icofont-rounded-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- benefits items end --> */}
          {/* <!-- benefits items start --> */}
          <div
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div class="achivev2__item-3 h-100 translateEffect1">
              <div class="achieve__icon m-20px-b">
                <GiStairsGoal />
              </div>
              <h3 class="m-15px-b">Goals</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex? Voluptas minus quis aspernatur corporis.
              </p>
              <a href="#" class="link">
                Read more<i class="icofont-rounded-right"></i>
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
