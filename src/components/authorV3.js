import React from 'react';

import authorImg from '../assets/images/authorv3.png'

const AuthorV3 = () => {
    return (
        <section id="author" class="section-padding authorv3 bg-one">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="author-image">
                <img
                  class="img-fluid"
                  src={authorImg}
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="authorv3__content">
                <div class="authorv3__content--badge">The Author</div>
                <h3 class="display-5 mb-0">Martin John</h3>
                <p class="m-30px-b text-muted fs-5">Style: Art, Fiction</p>
                <p class="m-30px-b">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  ducimus enim fuga vero cumque possimus ipsum, alias numquam
                  sint et, voluptates quisquam. Totam atque, fuga culpa corrupti
                  eos reiciendis excepturi ad sint sequi magnam, iste voluptates
                  eaque. In, omnis cumque rem modi atque, dolorem fuga illum
                  dicta quidem atque dignissimos! Ipsum sequi harum commodi
                  laborum, ducimus tempore debitis nesciunt quasi! Deleniti.
                </p>
                <ul class="social-icon mt-0 mb-0">
                  <li>
                    <a href="#"><i class="icofont-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-youtube-play"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-whatsapp"></i></a>
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