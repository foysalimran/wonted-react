import React from 'react';

import data from "../data/about.json"

import authorImg from '../assets/images/authorv3.png'

const AuthorV3 = () => {
  const {aboutv3} = data; 
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
                  src={aboutv3.image}
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
                <div className="authorv3__content--badge">{aboutv3.title}</div>
                <h3 className="display-5 mb-0">{aboutv3.name}</h3>
                <p className="m-30px-b text-muted fs-5">Style: {aboutv3.Style}</p>
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
                {aboutv3.social?.map((data, i) => (
                  <li key={i}>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={data.icon}
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AuthorV3;