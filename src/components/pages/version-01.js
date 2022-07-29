import React from "react";
import Footer from "../global-components/footer";
import Achieve from "../home-components/achieve";
import Achievement from "../home-components/achievement";
import Author from "../home-components/author";
import Books from "../home-components/books";
import Chapter from "../home-components/chapter";
import ChapterPreview from "../home-components/chapter-preview";
import Cta from "../home-components/cta";
import Ctav2 from "../home-components/ctav2";
import Hero from "../home-components/hero";
import Pricing from "../home-components/pricing";
import Testimonial from "../home-components/testimonial";

function Version01() {

  return (
    <>
      <Hero />
      <Achieve />
      <Chapter />
      <ChapterPreview />
      <Pricing />
      <Author />
      <Achievement />
      <Books />
      <Cta />
      <Testimonial />
      <Ctav2 />
      <Footer />
    </>
  );
};

export default Version01;
