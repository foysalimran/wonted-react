/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PagesHeader from "../pages-header";

import eventImg1 from '../../assets/images/events/1.jpg'
import eventImg2 from '../../assets/images/events/2.jpg'
import eventImg3 from '../../assets/images/events/3.jpg'
import eventImg4 from '../../assets/images/events/4.jpg'
import eventImg5 from '../../assets/images/events/5.jpg'
import eventImg6 from '../../assets/images/events/6.jpg'
import Headerv3 from "../global/headerv3";

const AllEvent = () => {
  return (
    <>
    <Headerv3 />
      <PagesHeader />
      <div
        id="all-events"
        className="all-blogs hero__padding overflow-hidden position-relative bg-one"
      >
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1
                className="display-3"
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
                  <a href="/">Home</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <i className="icofont-rounded-right"></i>
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

      <div className="section-padding events">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg1}
                      alt="events 01"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> Milan
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg2}
                      alt="events 01"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> Boston
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg3}
                      alt="events 02"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> Juventus
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg4}
                      alt="events 02"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> Atalanta
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg5}
                      alt="events 03"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> Madrid
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <article className="events__single-event">
                <div className="events__single-event__image">
                  <a href="single-event.html">
                    <img
                      className="img-fluid"
                      src={eventImg6}
                      alt="events 03"
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event.html">
                        Discussion On Horror Thriller
                      </a>
                    </h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime provident, in tempore incidunt laudantium.
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <i className="icofont-calendar"></i> 3 June, 2021
                    </div>
                    <div>
                      <i className="icofont-location-pin"></i> North London
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="blog__pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
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
