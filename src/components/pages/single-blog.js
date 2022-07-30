import React from 'react';
import PagesHeader from '../global-components/pages-header';
import img1 from '../../assets/images/blog/single-blog.jpg';
import img2 from '../../assets/images/blog/blog_01.jpg';
import img3 from '../../assets/images/blog/blog_02.jpg';
import user1 from '../../assets/images/user-1.png';
import user2 from '../../assets/images/user-2.png';

const SingleBlog = () => {
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
            <h1
              class="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Single Blog
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
                Single Blog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
     {/* ========== All blogs hero end ==========  */}
     {/* ========== All Blog section start ==========  */}
    <div id="single-blog" class="section-padding single-blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <article>
              <img
                class="img-fluid"
                src={img1}
                alt=""
              />
              <ul class="single-blog__metainfo">
                <li><i class="icofont-user-male"></i><a href="#">John</a></li>
                <li>
                  <i class="icofont-ui-calendar"></i
                  ><a href="#">12 May, 2022</a>
                </li>
                <li><i class="icofont-ui-messaging"></i>3 Comments</li>
              </ul>
              <h2 class="display-5 single-blog__title">
                Books with sneaky sci-fi plots
              </h2>
              <div class="single-blog__para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt labore et dolore sitor magna aliqua.
                  Quis ipsum suspendisse ultrices <strong>gravida</strong>.
                  Risus commodo viverra manas accumsan lacus vel facilisis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  No sea takimata sanctus est Lorem
                  <a href="index.html">Ipsum</a> dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et.
                </p>
                <blockquote class="single-blog__para__quote">
                  <span class="single-blog__para__quote__icon"
                    ><i class="icofont-quote-right"></i
                  ></span>
                  <div class="single-blog__para__quote__text">
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cum fuga ab, eum numquam ea dolores quae takimata
                      sanctus est Lorem amet ducimus Lorem ipsum, dolor sit amet
                      consectetur adipisicing amet"
                    </p>
                  </div>
                </blockquote>
                <h2 class="display-6 single-blog__title">
                  Amazon Editors’ personal audiobook favorites
                </h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluniti atqup quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. Et harum quidem rerum .
                </p>
                <div class="row mt-4">
                  <div class="col-md-6 mb-4">
                    <div class="post-img">
                      <img
                        class="img-fluid"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="post-img">
                      <img
                        class="img-fluid"
                        src={img3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <h2 class="display-6 single-blog__title">
                  Best mysteries and thrillers of 2022 so far
                </h2>
                <ol>
                  <li>
                    Mauris ut in vestibulum hasellus ultrices fusce nibh justo,
                    venenatis, amet. Lectus quam.
                  </li>
                  <li>
                    Consectetur phasellus <strong>ultrices</strong> fusce nibh
                    justo, venenatis, amet. Lectus quam.
                  </li>
                  <li>
                    Lectus quam there are two thing is very important in
                    Consectetur phasellus ultrices fusce.
                  </li>
                </ol>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua at vero amet dolor sit
                  consect.
                </p>
                <ul class="content-feature-list">
                  <li>
                    <i class="icofont-check-circled"></i> Lorem ipsum dolor, sit
                    amet.
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i> Amet consectetur
                    adipisicing elit Officia.
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i> Aquaerat ipsa quis
                    possimus.
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i> Lorem aquaerat ipsa
                    quis possimus.
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i> Consectetur Amet
                    adipisicing elit Officia.
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <strong>adipisicing</strong> elit, sed do eiusmod tempor quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  <a href="index.html">sed</a> uia non numquam eius modi tempora
                  incidunt ut labore dolor.
                </p>
              </div>
            </article>
            <div class="single-blog__share bg-one p-4">
              <strong>Share:</strong>
              <ul class="social-icon">
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
            <div class="single-blog__comment">
              <div class="single-blog__comment__title">
                <h4><span>3</span> Comments</h4>
              </div>
              <div class="single-blog__comment__wrap">
                <div class="single-blog__comment__item bg-one">
                  <div class="single-blog__comment__item__image">
                    <img
                      class="img-fluid"
                      src={user1}
                      alt="mage"
                    />
                  </div>
                  <div class="single-blog__comment__item__content">
                    <div class="comment-author-info">
                      <div class="row align-items-start">
                        <div class="col-md-9 col-12 order-md-1 order-1">
                          <h5>Olivic Dsuza</h5>
                          <p class="comment-date">Feb 15, 2022 | 10:21 am</p>
                        </div>
                        <div
                          class="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3"
                        >
                          <a href="#cmt-form" class="reply-btn">Reply</a>
                        </div>
                        <div
                          class="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2"
                        >
                          <div class="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="single-blog__comment__item md-m-0px-l m-40px-l bg-one"
                >
                  <div class="single-blog__comment__item__image">
                    <img
                      class="img-fluid"
                      src={user2}
                      alt="mage"
                    />
                  </div>
                  <div class="single-blog__comment__item__content">
                    <div class="comment-author-info">
                      <div class="row align-items-start">
                        <div class="col-md-9 col-12 order-md-1 order-1">
                          <h5>Everly Leah</h5>
                          <p class="comment-date">Mar 30, 2022 | 12:33 am</p>
                        </div>
                        <div
                          class="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3"
                        >
                          <a href="#cmt-form" class="reply-btn">Reply</a>
                        </div>
                        <div
                          class="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2"
                        >
                          <div class="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-blog__comment__item bg-one">
                  <div class="single-blog__comment__item__image">
                    <img
                      class="img-fluid"
                      src={user1}
                      alt="mage"
                    />
                  </div>
                  <div class="single-blog__comment__item__content">
                    <div class="comment-author-info">
                      <div class="row align-items-start">
                        <div class="col-md-9 col-12 order-md-1 order-1">
                          <h5>Michel Jackson</h5>
                          <p class="comment-date">Feb 15, 2022 | 10:21 am</p>
                        </div>
                        <div
                          class="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3"
                        >
                          <a href="#cmt-form" class="reply-btn">Reply</a>
                        </div>
                        <div
                          class="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2"
                        >
                          <div class="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog__comment__form bg-one">
                <div class="m-25px-b">
                  <h4>Leave A Comment</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked.
                  </p>
                </div>
                <form action="#" class="comment-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required=""
                          placeholder="Name*"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required=""
                          placeholder="Email Address*"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="url"
                          name="website"
                          id="website"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <textarea
                          name="messages"
                          id="messages"
                          cols="30"
                          rows="5"
                          placeholder="Please Enter Your Comment Here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="m-20px-t">
                    <a class="button button__primary">
                      <span>POST A COMMENT</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ========== All Blog section end ========== --> */}
        </>
    );
};

export default SingleBlog;