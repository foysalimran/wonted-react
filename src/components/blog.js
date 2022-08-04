import React from "react";
import { FaComments } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { RiTimeFill } from "react-icons/ri";
import data from "../data/blog.json";

const Blog = () => {
  const { blog } = data;

  return (
    // <!-- ========== Blog section start ========== -->
    <section id="blog" className="section-padding blog">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {blog.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {blog.title}
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
        <div className="row justify-content-center">
          {blog.blogList.slice(0, 3).map((data, i) => (
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
                    <img className="img-fluid" src={data.image} alt="Blog 01" />
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
      </div>
    </section>
    // <!-- ========== Blog section end ========== -->
  );
};

export default Blog;
