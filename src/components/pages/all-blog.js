/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { RiTimeFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import data from "../../data/blog.json";
import Header from "../global/header";
import Footer from "../global/footer";

const AllBlog = ({ headerv3, footer }) => {
  const { menuv3 } = footer;
  const { blog } = data;

  return (
    <>
      <Header header={headerv3} />
      <section
        id="all-blogs"
        className="all-blogs hero__padding overflow-hidden position-relative bg-one"
      >
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1
                className="display-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                {blog.allBlog}
              </h1>
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="650"
                >
                  <a href="/">Home</a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <i className="icofont-rounded-right"></i>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  {blog.allBlog}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="section-padding blog">
        <div className="container">
          <div className="row">
            {blog.blogList.slice(0, 6).map((data, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <article className="blog__single-post h-100 translateEffect1">
                  <div className="blog__single-post__image">
                    <a href="single-blog">
                      <img
                        className="img-fluid"
                        src={data.image}
                        alt="Blog 01"
                      />
                    </a>
                  </div>
                  <div className="blog__single-post__body">
                    <div className="blog__single-post__content">
                      <h2 className="fs-4">
                        <a href="single-blog">{data.title}</a>
                      </h2>
                      <p className="m-0">{data.description}</p>
                    </div>
                    <div className="blog__single-post__meta">
                      <div className="d-flex gap-2 align-items-center">
                        <RiTimeFill />
                        {data.date}
                      </div>
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
            ))}
          </div>
          <div className="blog__pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer menu={menuv3} />
    </>
  );
};

export default AllBlog;
