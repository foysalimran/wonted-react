/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";
import Lightbox from "react-lightbox-component";

import image1 from "../assets/images/chapter-preview/1.jpg";
import image2 from "../assets/images/chapter-preview/2.jpg";
import image3 from "../assets/images/chapter-preview/3.jpg";
import image4 from "../assets/images/chapter-preview/4.jpg";
import image5 from "../assets/images/chapter-preview/5.jpg";

const ChapterPreview = () => {
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
                  <Lightbox
                    images={[
                      {
                        src: image1,
                        title: "image title",
                        description: "image description",
                       
                      },
                    ]}
                    thumbnailWidth= '100%'
                    thumbnailHeight= 'auto'
                  />
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Lightbox
                    images={[
                      {
                        src: image2,
                        title: "image title",
                        description: "image description",
                       
                      },
                    ]}
                    thumbnailWidth= '100%'
                    thumbnailHeight= 'auto'
                  />
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Lightbox
                    images={[
                      {
                        src: image3,
                        title: "image title",
                        description: "image description",
                       
                      },
                    ]}
                    thumbnailWidth= '100%'
                    thumbnailHeight= 'auto'
                  />
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Lightbox
                    images={[
                      {
                        src: image4,
                        title: "image title",
                        description: "image description",
                       
                      },
                    ]}
                    thumbnailWidth= '100%'
                    thumbnailHeight= 'auto'
                  />
              
                </div>
            
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide p-5px-lr translateEffect2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Lightbox
                    images={[
                      {
                        src: image5,
                        title: "image title",
                        description: "image description",
                       
                      },
                    ]}
                    thumbnailWidth= '100%'
                    thumbnailHeight= 'auto'
                  />
              
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
