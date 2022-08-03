/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery"

import GLightbox from 'glightbox';
window.jQuery = $;
const ChapterPreview = () => {

  useEffect(() => {
     GLightbox({
      selector: ".glightbox2",
      slideEffect: "zoom",
    });
  }, [])

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
                CHAPTERS PREVIEW
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Read some chapter free.
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

        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a
                      href="assets/images/chapter-preview/1.jpg"
                      className="glightbox2"
                      data-glightbox=" description: .custom-desc1; descPosition: right;"
                    >
                      <img
                        className="chapter-img img-fluid"
                        src="assets/images/chapter-preview/1.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc1">
                      <h3 className="mb-4 text-center">The Beginning</h3>
                      <p className="first-letter">
                        Dpsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a
                      href="assets/images/chapter-preview/2.jpg"
                      className="glightbox2"
                      data-glightbox="description: .custom-desc2; descPosition: right;"
                    >
                      <img
                        className="chapter-img img-fluid"
                        src="assets/images/chapter-preview/2.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc2">
                      <h3 className="mb-4 text-center">The Beginning 2</h3>
                      <p className="first-letter">
                        Epsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a
                      href="assets/images/chapter-preview/3.jpg"
                      className="glightbox2"
                      data-glightbox=" description: .custom-desc2; descPosition: right;"
                    >
                      <img
                        className="chapter-img img-fluid"
                        src="assets/images/chapter-preview/3.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc2">
                      <h3 className="mb-4 text-center">The Beginning 2</h3>
                      <p className="first-letter">
                        Dpsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a
                      href="assets/images/chapter-preview/1.jpg"
                      className="glightbox2"
                      data-glightbox=" description: .custom-desc1; descPosition: right;"
                    >
                      <img
                        className="chapter-img img-fluid"
                        src="assets/images/chapter-preview/1.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc1">
                      <h3 className="mb-4 text-center">The Beginning</h3>
                      <p className="first-letter">
                        Dpsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a
                      href="assets/images/chapter-preview/1.jpg"
                      className="glightbox2"
                      data-glightbox=" description: .custom-desc1; descPosition: right;"
                    >
                      <img
                        className="chapter-img img-fluid"
                        src="assets/images/chapter-preview/1.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc1">
                      <h3 className="mb-4 text-center">The Beginning</h3>
                      <p className="first-letter">
                        Dpsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
          
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapter preview section end ========== -->
  );
};

export default ChapterPreview;
