import React from "react";
import data from "../data/books.json"

const Booksv1 = () => {
    const { books} = data;
  return (
    // <!-- ========== Books section start ========== -->
    <section id="books" class="booksv1 section-padding bg-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div class="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {books.subtitle}
              </span>
              <h2
                class="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
               {books.title}
              </h2>
              <div
                class="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div class="row gx-5">
          <div
            class="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="row">
              <div class="col-6">
                <div class="booksv1__img--wrap">
                  <div class="booksv1__img">
                    <img
                      class="img-fluid"
                      src={books.image1}
                      alt="Book name"
                    />
                  </div>
                  <div class="booksv1__img">
                    <img
                      class="img-fluid"
                      src={books.image2}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="booksv1__img--wrap m-50px-t md-m-0px-t">
                  <div class="booksv1__img">
                    <img
                      class="img-fluid"
                      src={books.image3}
                      alt="Book name"
                    />
                  </div>
                  <div class="booksv1__img">
                    <img
                      class="img-fluid"
                      src={books.image4}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="booksv1__contnet">
              <div class="booksv1__contnet--badge mb-0">{books.booksItem.subtitle}</div>
              <h3 class="display-6 m-30px-b">{books.booksItem.title}</h3>
              <div class="booksv1__item--wrap">
                {books.booksItem?.booksItemContent?.map((data, i) => (
                    <div class="booksv1__item" key={i}>
                    <div class="booksv1__item--icon">
                      <img className="img-fluid" src={data.icon} alt="Icon" width="30" height="30" />
                    </div>
                    <div class="booksv1__item--text">
                      <h3>{data.title}</h3>
                      <p>
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Books section end ========== -->
  );
};

export default Booksv1;
