/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footerv3 from "../global/footerv3";
import Headerv3 from "../global/headerv3";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import { IoLogoWhatsapp } from "react-icons/io";

const SingleEvent = () => {
  return (
    <>
      <Headerv3 />
      {/* <!-- ========== All blogs hero start ========== --> */}
      <section
        id="single-events"
        class="all-blogs hero__padding overflow-hidden position-relative bg-one"
      >
        <div class="container">
          <div class="row">
            <div class="blog-title">
              <h1
                class="display-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                Single Event Page
              </h1>
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="650"
                >
                  <a href="index.html">Home</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <i class="icofont-rounded-right"></i>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  Single Event
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== All blogs hero end ========== --> */}
      {/* <!-- ========== Blog right sidebar start ========== --> */}
      <section class="section-padding single-event">
        <div class="container">
          <div class="row">
            <div
              class="col-md-7 col-lg-8 col-xl-9 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div class="single-event__area">
                <div class="single-event__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/events/1.jpg"
                    alt=""
                  />
                </div>
                <div class="single-event__area__menu">
                  <h2 class="fs-2">Discussion On Horror Thriller</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of world horror Thriller.
                    Lorem ipsum dolor sit.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of world horror Thriller.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate maxime officiis quos ipsam vitae aliquam assumenda
                    atque natus. Perspiciatis, corporis a! Sequi consequuntur
                    ipsa quam ad veritatis inventore doloribus doloremque.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of world horror Thriller.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate maxime officiis quos ipsam vitae aliquam assumenda
                    atque natus. Perspiciatis, corporis a! Sequi consequuntur
                    ipsa quam ad veritatis inventore doloribus doloremque.
                  </p>
                  <div class="single-event__area__social">
                    <h2 class="fs-4">Share the event</h2>
                    <ul className="social-icon my-4">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="right"
              class="col-md-5 col-lg-4 col-xl-3"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div class="single-event__sidebar">
                <h3 class="item-border text-center">Event Details</h3>
                <div class="single-event__sidebar__details item-border">
                  <ul>
                    <li>
                      <i class="icofont-calendar"></i>
                      <div>
                        <p class="para-1">Date</p>
                        <p class="para-2">November 17, 2022</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-location-pin"></i>
                      <div>
                        <p class="para-1">Location</p>
                        <p class="para-2">Milan</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-location-arrow"></i>
                      <div>
                        <p class="para-1">Venue</p>
                        <p class="para-2">San Siro Stadium</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-flag"></i>
                      <div>
                        <p class="para-1">Address</p>
                        <p class="para-2">Strada 2a, MI, Italy</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-user-alt-3"></i>
                      <div>
                        <p class="para-1">Organizer</p>
                        <p class="para-2">Cloud inc.</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-price"></i>
                      <div>
                        <p class="para-1">Price</p>
                        <p class="para-2">$10</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-price"></i>
                      <div>
                        <p class="para-1">Remaining Tickets</p>
                        <p class="para-2">180 Tickets</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-phone"></i>
                      <div>
                        <p class="para-1">Phone</p>
                        <p class="para-2">+00879564</p>
                      </div>
                    </li>
                    <li>
                      <i class="icofont-email"></i>
                      <div>
                        <p class="para-1">Email</p>
                        <p class="para-2">email@email.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="text-center">
                  <a href="#" class="button button__primary">
                    <span>Purchase Ticket</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== Blog right sidebar end ========== --> */}
      <Footerv3 />
    </>
  );
};

export default SingleEvent;
