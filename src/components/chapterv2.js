import React from "react";
import chapterData from "../data/chapter.json";

const Chapterv2 = () => {
const {chapterv2} = chapterData;

  return (
    // <!-- ========== Chapter section start ========== -->
    <section id="chapters" className="section-padding chapter bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                CHAPTERS
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Chapters we've covered
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
          {chapterv2?.map((data) => (
            <div
              key={data.id}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="chapter__item h-100 translateEffect1">
                <p>{data.chapter}</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Chapter section end ========== -->
  );
};

export default Chapterv2;
