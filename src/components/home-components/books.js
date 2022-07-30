import React from "react";

const Books = () => {
  return (
    // <!-- ========== Booksv2 start ========== -->
    <section id="books" className="section-padding bg-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Books
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Some of other books by author.
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
        <div
          className="chapter__preview2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {/* <div className="chapter__preview2-content">
        <div className="chapter__preview2-container">
          <div
            className="panel cover-panel active"
            style="
              background-image: url('assets/images/chapter-preview/cover-1.jpg');
            "
          >
            <h3>The King</h3>
          </div>
          <div
            className="panel cover-panel"
            style={"background-image: url('assets/images/chapter-preview/cover-2.jpg')"}
          >
            <h3>Death & Dark</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-3.jpg');
            "
          >
            <h3>Chapter 3</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-4.jpg');
            "
          >
            <h3>Sing Souls</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-5.jpg');
            "
          >
            <h3>The Mermaid</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-6.jpg');
            "
          >
            <h3>The Worst</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-1.jpg');
            "
          >
            <h3>Drug Lord</h3>
          </div>
          <div
            className="panel cover-panel"
            style="
              background-image: url('assets/images/chapter-preview/cover-3.jpg');
            "
          >
            <h3>White Bird</h3>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </section>
    // <!-- ========== Books v2  end ========== -->
  );
};

export default Books;