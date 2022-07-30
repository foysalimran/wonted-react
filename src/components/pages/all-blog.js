import React from 'react';
import PagesHeader from '../global/pages-header';
import blogImg1 from '../../assets/images/blog/blog_01.jpg'
import blogImg2 from '../../assets/images/blog/blog_02.jpg'
import blogImg3 from '../../assets/images/blog/blog_03.jpg'

import { RiTimeFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { HiShare } from "react-icons/hi";

const AllBlog = () => {
    return (
        <>
               <PagesHeader />
    <section
      id="all-blogs"
      class="all-blogs hero__padding overflow-hidden position-relative bg-one"
    >
      <div class="container">
        <div class="row">
          <div class="blog-title">
            <h1 class="display-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">All Blog</h1>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="650"><a href="index.html">Home</a></li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"><i class="icofont-rounded-right"></i></li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750">All Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="section-padding blog">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg1}
                    alt="Blog 01"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For
                      ‘Historical</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                  <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
              </article>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg2}
                    alt="Blog 01"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For
                      ‘Historical</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg3}
                    alt="Blog 02"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >Wyden, Eshoo question “big five” publishers over</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg1}
                    alt="Blog 02"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >Wyden, Eshoo question “big five” publishers over</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg2}
                    alt="Blog 03"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >There is a method to this book-buying madness</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <article class="blog__single-post">
              <div class="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    class="img-fluid"
                    src={blogImg3}
                    alt="Blog 03"
                  />
                </a>
              </div>
              <div class="blog__single-post__body">
                <div class="blog__single-post__content">
                  <h2 class="fs-4">
                    <a href="single-blog.html"
                      >There is a method to this book-buying madness</a
                    >
                  </h2>
                  <p class="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="blog__single-post__meta">
                <div><RiTimeFill /> 3 June, 2021</div>
                  <ul>
                    <li>
                    <FaComments />
                    </li>
                    <li>
                      <HiShare />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="blog__pagination">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
        </>
    );
};

export default AllBlog;