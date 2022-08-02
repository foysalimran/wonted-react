import React from 'react';

const Event = () => {
    return (
        // <!-- ========== Events section end ========== -->
        <section id="events" class="section-padding event bg-one">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                <div class="section-title-center text-center">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="150"
                    >Events</span
                  >
                  <h2
                    class="display-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Upcoming Events & Programs
                  </h2>
                  <div
                    class="section-divider divider-traingle"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="250"
                  ></div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                class="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <article class="events__single-event h-100 translateEffect1">
                  <div class="events__single-event__image">
                    <a href="single-event.html">
                      <img
                        class="img-fluid"
                        src="assets/images/events/1.jpg"
                        alt="events 01"
                      />
                    </a>
                  </div>
                  <div class="events__single-event__body">
                    <div class="events__single-event__content">
                      <h2 class="fs-4">
                        <a href="single-event.html"
                          >Discussion On Horror Thriller</a
                        >
                      </h2>
                      <p class="m-0">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Maxime provident, in tempore incidunt laudantium.
                      </p>
                    </div>
                    <div class="events__single-event__meta">
                      <div><i class="icofont-calendar"></i> 3 June, 2021</div>
                      <div><i class="icofont-location-pin"></i> Milan</div>
                    </div>
                  </div>
                </article>
              </div>
              {/* <!-- End single event --> */}
              <div
                class="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <article class="events__single-event h-100 translateEffect1">
                  <div class="events__single-event__image">
                    <a href="single-event.html">
                      <img
                        class="img-fluid"
                        src="assets/images/events/2.jpg"
                        alt="events 01"
                      />
                    </a>
                  </div>
                  <div class="events__single-event__body">
                    <div class="events__single-event__content">
                      <h2 class="fs-4">
                        <a href="single-event.html"
                          >Discussion On Horror Thriller</a
                        >
                      </h2>
                      <p class="m-0">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Maxime provident, in tempore incidunt laudantium.
                      </p>
                    </div>
                    <div class="events__single-event__meta">
                      <div><i class="icofont-calendar"></i> 3 June, 2021</div>
                      <div><i class="icofont-location-pin"></i> Boston</div>
                    </div>
                  </div>
                </article>
              </div>
              {/* <!-- End single event --> */}
              <div
                class="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <article class="events__single-event h-100 translateEffect1">
                  <div class="events__single-event__image">
                    <a href="single-event.html">
                      <img
                        class="img-fluid"
                        src="assets/images/events/3.jpg"
                        alt="events 02"
                      />
                    </a>
                  </div>
                  <div class="events__single-event__body">
                    <div class="events__single-event__content">
                      <h2 class="fs-4">
                        <a href="single-event.html"
                          >Discussion On Horror Thriller</a
                        >
                      </h2>
                      <p class="m-0">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Maxime provident, in tempore incidunt laudantium.
                      </p>
                    </div>
                    <div class="events__single-event__meta">
                      <div><i class="icofont-calendar"></i> 3 June, 2021</div>
                      <div><i class="icofont-location-pin"></i> Juventus</div>
                    </div>
                  </div>
                </article>
              </div>
              {/* <!-- End single event --> */}
            </div>
          </div>
        </section>
        // <!-- ========== Events section end ========== -->
    );
};

export default Event;