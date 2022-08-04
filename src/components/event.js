import React from "react";
import data from "../data/events.json";

import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Event = () => {
  const { events } = data;
  return (
    // <!-- ========== Events section end ========== -->
    <section id="events" className="section-padding event bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {events.title}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {events.subtitle}
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
        <div className="row justify-content-center">
          {events.singleBlog.slice(0, 3).map((data) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <article className="events__single-event h-100 translateEffect1">
                <div className="events__single-event__image">
                  <a href="single-event">
                    <img
                      className="img-fluid"
                      src={data.image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <a href="single-event">
                        {data.title}
                      </a>
                    </h2>
                    <p className="m-0">
                     {data.description}
                    </p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <FaRegCalendarAlt /> {data.date} {data.month}, {data.year}
                    </div>
                    <div>
                      <FaMapMarkerAlt /> {data.location}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Events section end ========== -->
  );
};

export default Event;
