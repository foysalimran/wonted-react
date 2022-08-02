/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Headerv3 from "../global/headerv3";

const BlogLeftSidebar = () => {
  return (
    // <!-- ========== All blogs hero start ========== -->
    <>
      <Headerv3 />
      <section
        id="left-sidebar"
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
                Blog left sidebar
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
                  Blog left sidebar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== All blogs hero end ========== --> */}
      {/* <!-- ========== Blog right sidebar start ========== --> */}
      <section class="section-padding all-blog2">
        <div class="container">
          <div class="row">
            <div
              id="right"
              class="col-md-5 col-lg-4 col-xl-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="all-blog2__sidebar">
                <form>
                  <input type="text" placeholder="Search" />
                  <i class="icofont-search-1"></i>
                </form>
                <div class="all-blog2__sidebar__categories item-border">
                  <h2 class="fs-4 mb-3">Blog Categories</h2>
                  <ul>
                    <li>
                      <a href="#">Accessories</a>(2)
                    </li>
                    <li>
                      <a href="#">Blog</a>(8)
                    </li>
                    <li>
                      <a href="#">Clocks</a>(4)
                    </li>
                    <li>
                      <a href="#">Home Accent</a>(1)
                    </li>
                    <li>
                      <a href="#">Lighting</a> (3)
                    </li>
                    <li>
                      <a href="#">Post Format</a>(9)
                    </li>
                    <li>
                      <a href="#">Sofas</a>(1)
                    </li>
                    <li>
                      <a href="#">Table &amp; Desk</a>(2)
                    </li>
                    <li>
                      <a href="#">Uncategorized</a> (10)
                    </li>
                  </ul>
                </div>
                <div class="all-blog2__sidebar__latest-news item-border">
                  <h2 class="fs-4 mb-3">Latest News</h2>
                  <div class="all-blog2__sidebar__latest-news__item">
                    <div class="all-blog2__sidebar__latest-news__item__image">
                      <a href="#">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-1.jpg"
                          class=""
                          alt="Sidebar Image 01"
                        />
                      </a>
                    </div>
                    <div class="all-blog2__sidebar__latest-news__item__content">
                      <h4 class="fs-5 title">
                        <a href="#">
                          Amazon Editors’ personal audiobook favorites
                        </a>
                      </h4>
                      <p class="mb-0">On October 3, 2016</p>
                    </div>
                  </div>
                  <div class="all-blog2__sidebar__latest-news__item">
                    <div class="all-blog2__sidebar__latest-news__item__image">
                      <a href="#">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-2.jpg"
                          class="#"
                          alt="Sidebar Image 02"
                        />
                      </a>
                    </div>
                    <div class="all-blog2__sidebar__latest-news__item__content">
                      <h4 class="fs-5 title">
                        <a href="#">Simply ipsum is lorem dummy text</a>
                      </h4>
                      <p class="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                  <div class="all-blog2__sidebar__latest-news__item">
                    <div class="all-blog2__sidebar__latest-news__item__image">
                      <a href="#">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-3.jpg"
                          class="#"
                          alt="Sidebar Image 03"
                        />
                      </a>
                    </div>
                    <div class="all-blog2__sidebar__latest-news__item__content">
                      <h4 class="fs-5 title">
                        <a href="#">Lorem Ipsum dummy simply text is</a>
                      </h4>
                      <p class="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                  <div class="all-blog2__sidebar__latest-news__item">
                    <div class="all-blog2__sidebar__latest-news__item__image">
                      <a href="#">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-4.jpg"
                          class=""
                          alt="Sidebar Image 04"
                        />
                      </a>
                    </div>
                    <div class="all-blog2__sidebar__latest-news__item__content">
                      <h4 class="fs-5 title">
                        <a href="#">Books with sneaky sci-fi plots</a>
                      </h4>
                      <p class="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                </div>
                <div class="all-blog2__sidebar__archive item-border">
                  <h2 class="fs-4 mb-3">Archives</h2>
                  <ul>
                    <li>
                      <a href="#">December 2019</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">January 2019</a>&nbsp;(7)
                    </li>
                    <li>
                      <a href="#">October 2018</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">January 2018</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">October 2017</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">October 2016</a>&nbsp;(10)
                    </li>
                  </ul>
                </div>
                <div class="all-blog2__sidebar__social item-border">
                  <h2 class="fs-4 mb-3">Social</h2>
                  <ul class="social-icon my-4">
                    <li>
                      <a href="#">
                        <i class="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="all-blog2__sidebar__popular-tags item-border">
                  <h2 class="fs-4 mb-3">Popular Tags</h2>
                  <ul>
                    <li>
                      <a href="#">clocks</a>
                    </li>
                    <li>
                      <a href="#">Home Accent</a>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                    </li>
                    <li>
                      <a href="#">sofas</a>
                    </li>
                    <li>
                      <a href="#">table</a>
                    </li>
                    <li>
                      <a href="#">table & desk</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-md-7 col-lg-8 col-xl-9 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="all-blog2__area">
                <div class="all-blog2__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/blog/blog_04.jpg"
                    alt=""
                  />
                </div>
                <div class="all-blog2__area__menu">
                  <ul>
                    <li>
                      <a href="index.html" title="Posts by Lindsy Powers">
                        Lindsy Powers
                      </a>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 class="fs-2">
                    <a href="#">Books with sneaky sci-fi plots</a>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <a href="#" class="link">
                    Read more<i class="icofont-rounded-right"></i>
                  </a>
                </div>
              </div>
              <div class="all-blog2__area">
                <div class="all-blog2__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/blog/blog_05.jpg"
                    alt=""
                  />
                </div>
                <div class="all-blog2__area__menu">
                  <ul>
                    <li>
                      <a href="index.html" title="Posts by Vannessa Cronin">
                        Vannessa Cronin
                      </a>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 class="fs-2">
                    <a href="#">Best science books of 2022 so far</a>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <a href="#" class="link">
                    Read more<i class="icofont-rounded-right"></i>
                  </a>
                </div>
              </div>
              <div class="all-blog2__area">
                <div class="all-blog2__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/blog/blog_06.jpg"
                    alt=""
                  />
                </div>
                <div class="all-blog2__area__menu">
                  <ul>
                    <li>
                      <a href="index.html" title="Posts by Al Woodworth">
                        Al Woodworth
                      </a>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 class="fs-2">
                    <a href="#">A.J. Jacobs’ favorite recent reads</a>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <a href="#" class="link">
                    Read more<i class="icofont-rounded-right"></i>
                  </a>
                </div>
              </div>
              <div class="all-blog2__area">
                <div class="all-blog2__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/blog/blog_07.jpg"
                    alt=""
                  />
                </div>
                <div class="all-blog2__area__menu">
                  <ul>
                    <li>
                      <a href="index.html" title="Posts by Marcus Mann">
                        Marcus Mann
                      </a>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 class="fs-2">
                    <a href="#">
                      Books we’re talking about: film and TV edition
                    </a>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <a href="#" class="link">
                    Read more<i class="icofont-rounded-right"></i>
                  </a>
                </div>
              </div>
              <div class="all-blog2__area">
                <div class="all-blog2__area__image">
                  <img
                    class="img-fluid"
                    src="assets/images/blog/blog_08.jpg"
                    alt=""
                  />
                </div>
                <div class="all-blog2__area__menu">
                  <ul>
                    <li>
                      <a href="index.html" title="Posts by Seira Wilson">
                        Seira Wilson
                      </a>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 class="fs-2">
                    <a href="#">Best romance books of 2022 so far</a>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <a href="#" class="link">
                    Read more<i class="icofont-rounded-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- ========== Blog right sidebar end ========== --> */}
    </>
  );
};

export default BlogLeftSidebar;