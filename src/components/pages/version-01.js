import React from "react";
import Achieve from "../achieve";
import Achievement from "../achievement";
import Author from "../author";
import Books from "../books";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Contact from "../global/contact";
import Cta from "../global/cta";
import Ctav2 from "../global/ctav2";
import FunFacts from "../global/fun-facts";
import Hero from "../hero";
import Pricing from "../global/pricing";
import Testimonial from "../global/testimonial";

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
      <FunFacts />
      <Books />
      <Cta />
      <Testimonial />
      <Ctav2 />
      <Contact />
    </>
  );
}

export default Version01;
