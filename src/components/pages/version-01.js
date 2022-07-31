import React from "react";
import Achieve from "../achieve";
import Achievement from "../achievement";
import Author from "../author";
import Books from "../books";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Contact from "../contact";
import Cta from "../cta";
import Ctav2 from "../ctav2";
import FunFacts from "../fun-facts";
import Hero from "../hero";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

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
