import React from "react";
import Achieve from "../home-components/achieve";
import Achievement from "../home-components/achievement";
import Author from "../home-components/author";
import Books from "../home-components/books";
import Chapter from "../home-components/chapter";
import ChapterPreview from "../home-components/chapter-preview";
import Contact from "../global-components/contact";
import Cta from "../global-components/cta";
import Ctav2 from "../global-components/ctav2";
import FunFacts from "../global-components/fun-facts";
import Hero from "../home-components/hero";
import Pricing from "../global-components/pricing";
import Testimonial from "../global-components/testimonial";

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
