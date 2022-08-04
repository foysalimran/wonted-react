/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../../data/events.json";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Headerv3 from "../global/headerv3";

const AllEvent = () => {
  const { events } = data;
  return (
    <>
      <Headerv3 />
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
            {events.singleBlog.map((data) => (
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <article className="events__single-event h-100 translateEffect1">
                  <div className="events__single-event__image">
                    <a href="single-event">
                      <img className="img-fluid" src={data.image} alt="" />
                    </a>
                  </div>
                  <div className="events__single-event__body">
                    <div className="events__single-event__content">
                      <h2 className="fs-4">
                        <a href="single-event">{data.title}</a>
                      </h2>
                      <p className="m-0">{data.description}</p>
                    </div>
                    <div className="events__single-event__meta">
                      <div>
                        <FaRegCalendarAlt /> {data.date} {data.month},{" "}
                        {data.year}
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
