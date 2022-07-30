/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";
import user2 from "../../assets/images/user-2.png";
import user1 from "../../assets/images/user-1.png";

const Testimonial = () => {
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
              spaceBetween={50}
              slidesPerView={3}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              autoplay
            >
              <SwiperSlide>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      " Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Dolor neque molestiae distinctio, voluptatum
                      suscipit in, reiciendis, dolores enim optio corporis
                      maxime impedit rerum iure illum quae iusto obcaecati quod
                      laboriosam? "
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={user2} alt="User Image" />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">Brightlight books</h4>
                        <p className="mb-0">Ubold Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      " Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Dolor neque molestiae distinctio, voluptatum
                      suscipit in, reiciendis, dolores enim optio corporis
                      maxime impedit rerum iure illum quae iusto obcaecati quod
                      laboriosam? "
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={user2} alt="User Image" />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">Brightlight books</h4>
                        <p className="mb-0">Ubold Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      " Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Dolor neque molestiae distinctio, voluptatum
                      suscipit in, reiciendis, dolores enim optio corporis
                      maxime impedit rerum iure illum quae iusto obcaecati quod
                      laboriosam? "
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={user1} alt="User Image" />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">Brightlight books</h4>
                        <p className="mb-0">Ubold Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      " Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Dolor neque molestiae distinctio, voluptatum
                      suscipit in, reiciendis, dolores enim optio corporis
                      maxime impedit rerum iure illum quae iusto obcaecati quod
                      laboriosam? "
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={user2} alt="User Image" />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">Brightlight books</h4>
                        <p className="mb-0">Ubold Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-card card h-100 translateEffect1">
                  <div className="card-body p-4">
                    <div className="testi-card__quotation">
                      <i className="icofont-quote-right"></i>
                    </div>
                    <p className="my-4">
                      " Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Dolor neque molestiae distinctio, voluptatum
                      suscipit in, reiciendis, dolores enim optio corporis
                      maxime impedit rerum iure illum quae iusto obcaecati quod
                      laboriosam? "
                    </p>
                    <div className="testi-card__user-info pt-4">
                      <div className="testimonial__user-info__image">
                        <img src={user1} alt="User Image" />
                      </div>
                      <div className="testimonial__user-info__content">
                        <h4 className="mb-0">Brightlight books</h4>
                        <p className="mb-0">Ubold Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonial;
