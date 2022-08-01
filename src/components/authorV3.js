import React from 'react';

import authorImg from '../assets/images/authorv3.png'

const AuthorV3 = () => {
    return (
        <section id="author" className="section-padding authorv3 bg-one">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImg}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="authorv3__content">
                <div className="authorv3__content--badge">The Author</div>
                <h3 className="display-5 mb-0">Martin John</h3>
                <p className="m-30px-b text-muted fs-5">Style: Art, Fiction</p>
                <p className="m-30px-b">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  ducimus enim fuga vero cumque possimus ipsum, alias numquam
                  sint et, voluptates quisquam. Totam atque, fuga culpa corrupti
                  eos reiciendis excepturi ad sint sequi magnam, iste voluptates
                  eaque. In, omnis cumque rem modi atque, dolorem fuga illum
                  dicta quidem atque dignissimos! Ipsum sequi harum commodi
                  laborum, ducimus tempore debitis nesciunt quasi! Deleniti.
                </p>
                <ul className="social-icon mt-0 mb-0">
                  <li>
                    <a href="#"><i className="icofont-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icofont-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icofont-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icofont-youtube-play"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icofont-whatsapp"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AuthorV3;