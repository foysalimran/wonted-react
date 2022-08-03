import React from "react";
import data from "../data/chapterPreview.json";

const ChapterPreviewV2 = () => {
  const { chapterPreviewv2 } = data;

  return (
    // <!-- ========== Chapter preview section start ========== -->
    <section id="preview" className="section-padding chapter-preview">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {chapterPreviewv2.title}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {chapterPreviewv2.subtitle}
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
        <div
          className="chapter__preview2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="chapter__preview2-content">
            <div className="chapter__preview2-container">
              {chapterPreviewv2.chapters.map((data, i) =>
                data.active === true ? (
                  <div
                    className="panel active"
                    style={{
                      backgroundImage: `url(${data.image})`,
                    }}
                  >
                    <h3>{data.title}</h3>
                  </div>
                ) : (
                  <div
                    className="panel"
                    style={{
                      backgroundImage: `url(${data.image})`,
                    }}
                  >
                    <h3>{data.title}</h3>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapter preview section end ========== -->
  );
};

export default ChapterPreviewV2;
