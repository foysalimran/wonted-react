import React from "react";

const Booksv2 = () => {
  return (
    <section id="books" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div class="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Books
              </span>
              <h2
                class="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Some of recent released books
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
        <div
          class="chapter__preview2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="chapter__preview2-content">
            <div class="chapter__preview2-container">
              <div
                class="panel cover-panel active"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-1.jpg')"}}>
                <h3>The King</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-2.jpg')"}}>
                <h3>Death & Dark</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-3.jpg')"}}>
                <h3>Chapter 3</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-4.jpg')"}}>
                <h3>Sing Souls</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-5.jpg')"}}>
                <h3>The Mermaid</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-6.jpg')"}}>
                <h3>The Worst</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-1.jpg')"}}>
                <h3>Drug Lord</h3>
              </div>
              <div
                class="panel cover-panel"
                style={{backgroundImage: "url('assets/images/chapter-preview/cover-3.jpg')"}}>
                <h3>White Bird</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booksv2;
