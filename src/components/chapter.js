import React from "react";
import { Accordion } from "react-bootstrap";
// import chapter from "../assets/images/hero-2.png";
import data from "../data/chapter.json";

const Chapter = () => {
  const { chapter } = data;

  return (
    // <!-- ========== Chapters section start ========== -->
    <section id="chapters" className="section-padding bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {chapter.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {chapter.title}
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
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={chapter.image} alt="" className="img-fluid d-block" />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Accordion
              className="accordion-flush faqs-accordion mt-4 mt-lg-0"
              defaultActiveKey="1"
            >
              {/* <!-- accordion start --> */}
              {chapter.chapterItem?.map((data) => (
                <Accordion.Item eventKey={data.id.toString()} key={data.id}>
                  <Accordion.Header>{data.title}</Accordion.Header>
                  <Accordion.Body>
                    <p className="accordion-body text-secondary">
                      {data.description}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapters section end ========== -->
  );
};

export default Chapter;
