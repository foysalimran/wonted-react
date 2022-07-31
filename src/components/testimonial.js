/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const { testimonial } = data;
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    // <!-- ========== Testimonial section start ========== -->
    <section id="reviews" className="section-padding testimonial bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Testimonials
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                What people said about my books
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
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
            {testimonial?.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      {data.description}
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={data.image} alt={data.title} />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">{data.name}</h4>
                        <p className="mb-0">{data.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonial;
