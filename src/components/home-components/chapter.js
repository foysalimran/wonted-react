import React from "react";
import chapter from '../../assets/images/hero-2.png';

const Chapter = () => {
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
                Chapters
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
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={chapter} alt="" className="img-fluid d-block" />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div
              className="accordion accordion-flush faqs-accordion mt-4 mt-lg-0"
              id="accordionFlushExample"
            >
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    Chapter 01
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Chapter 02
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Chapter 03
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Chapter 04
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Chapter 05
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Chapter 06
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
              {/* <!-- accordion start --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Chapter 07
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <p className="accordion-body text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ea dolore amet laudantium quibusdam nobis labore
                    molestiae odit voluptas velit!
                  </p>
                </div>
              </div>
              {/* <!-- accordion end --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapters section end ========== -->
  );
};

export default Chapter;
