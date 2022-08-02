import React from "react";
import data from "../data/events.json";

const Eventv2 = () => {
  const { events } = data;
  return (
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
          {events.singleBlog.slice(0, 4).map((data) => (
            <div key={data.id}
              className="col m-30px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="card h-100 translateEffect1">
                <div className="card-body">
                  <div className="date">
                    <p>
                      {data.date} <span>{data.month}</span>
                    </p>
                  </div>
                  <h4 className="mb-3">{data.title}</h4>
                  <p>
                    {data.description}
                  </p>
                </div>
                <a href="single-event.html" className="link">
                  {data.btn}<i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
          ))}

          {/* <div
              className="col m-30px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card h-100 translateEffect1">
                <div className="card-body">
                  <div className="date">
                    <p>23 <span>JUNE</span></p>
                  </div>
                  <h4 className="mb-3">Discussion On Horror Thriller</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore quas voluptatibus porro quod quo
                  </p>
                </div>
                <a href="single-event.html" className="link"
                  >Read more<i className="icofont-rounded-right"></i
                ></a>
              </div>
            </div>
            <div
              className="col m-30px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="card h-100 translateEffect1">
                <div className="card-body">
                  <div className="date">
                    <p>23 <span>JUNE</span></p>
                  </div>
                  <h4 className="mb-3">Discussion On Horror Thriller</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore quas voluptatibus porro quod quo blanditiis sint
                    ipsam! Repellendus, voluptatibus soluta!
                  </p>
                </div>
                <a href="single-event.html" className="link"
                  >Read more<i className="icofont-rounded-right"></i
                ></a>
              </div>
            </div>
            <div
              className="col m-30px-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="card h-100 translateEffect1">
                <div className="card-body">
                  <div className="date">
                    <p>23 <span>JUNE</span></p>
                  </div>
                  <h4 className="mb-3">Discussion On Horror Thriller</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore quas voluptatibus porro quod quo blanditiis sint
                    ipsam! Repellendus, voluptatibus soluta!
                  </p>
                </div>
                <a href="single-event.html" className="link"
                  >Read more<i className="icofont-rounded-right"></i
                ></a>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Eventv2;
