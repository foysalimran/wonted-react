import React from 'react';

const ChapterPreviewV2 = () => {
    return (
       // <!-- ========== Chapter preview section start ========== -->
      <section id="preview" className="section-padding chapter-preview">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
              <div className="section-title-center text-center">
                <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">CHAPTERS PREVIEW</span>
                <h2 className="display-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Read some chapter free.</h2>
                <div className="section-divider divider-traingle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250"></div>
              </div>
            </div>
          </div>
          <div className="chapter__preview2"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="chapter__preview2-content">
              <div className="chapter__preview2-container">
                <div
                  className="panel active"
                  style={{backgroundImage: "url('assets/images/chapter-preview/6.png')"}}>
                  <h3>Chapter 1</h3>
                </div>
                <div
                  className="panel"
                  style={{backgroundImage: "url('assets/images/chapter-preview/7.png')"}}>
                  <h3>Chapter 2</h3>
                </div>
                <div
                  className="panel"
                  style={{backgroundImage: "url('assets/images/chapter-preview/8.png')"}}>
                  <h3>Chapter 3</h3>
                </div>
                <div
                  className="panel"
                  style={{backgroundImage: "url('assets/images/chapter-preview/9.png')"}}>
                  <h3>Chapter 4</h3>
                </div>
                <div
                  className="panel"
                  style={{backgroundImage: "url('assets/images/chapter-preview/10.png')"}}>
                  <h3>Chapter 5</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // <!-- ========== Chapter preview section end ========== -->
    );
};

export default ChapterPreviewV2;