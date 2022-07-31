import React from "react";
import PagesHeader from "../pages-header";

import eventImg1 from '../../assets/images/events/1.jpg'
import eventImg2 from '../../assets/images/events/2.jpg'
import eventImg3 from '../../assets/images/events/3.jpg'
import eventImg4 from '../../assets/images/events/4.jpg'
import eventImg5 from '../../assets/images/events/5.jpg'
import eventImg6 from '../../assets/images/events/6.jpg'

const AllEvent = () => {
  return (
    <>
      <PagesHeader />
      <div
        id="all-events"
        class="all-blogs hero__padding overflow-hidden position-relative bg-one"
      >
        <div class="container">
          <div class="row">
            <div class="blog-title">
              <h1
                class="display-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                All Events
              </h1>
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="650"
                >
                  <a href="index.html">Home</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <i class="icofont-rounded-right"></i>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  All Events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section-padding events">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg1}
                      alt="events 01"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> Milan
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg2}
                      alt="events 01"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> Boston
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg3}
                      alt="events 02"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> Juventus
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg4}
                      alt="events 02"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> Atalanta
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg5}
                      alt="events 03"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> Madrid
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              class="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <article class="events__single-event">
                <div class="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      class="img-fluid"
                      src={eventImg6}
                      alt="events 03"
                    />
                  </a>
                </div>
                <div class="events__single-event__body">
                  <div class="events__single-event__content">
                    <h2 class="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div class="events__single-event__meta">
                    <div>
                      <i class="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i class="icofont-location-pin"></i> North London
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="blog__pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvent;
