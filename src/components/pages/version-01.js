import React from "react";
import Achieve from "../achieve";
import Achievement from "../achievement";
import AuthorV2 from "../authorV2";
import Books from "../books";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Contact from "../contact";
import CtaV5 from "../ctaV5";
import CtaV4 from "../ctaV4";
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
      <AuthorV2 />
      <Achievement />
      <FunFacts />
      <Books />
      <CtaV5 />
      <Testimonial />
      <CtaV4 />
      <Contact />
    </>
  );
}

export default Version01;
