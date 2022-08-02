import React from "react";
import Achieve from "../achieve";
import Achievement from "../achievement";
import AuthorV2 from "../authorv2";
import Booksv2 from "../booksv2";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Contact from "../contact";
import CtaV4 from "../ctav4";
import CtaV5 from "../ctav5";
import FunFacts from "../fun-facts";
import Header from "../global/header";
import Hero from "../hero";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

function Version01() {
  return (
    <>
     <Header />
      <Hero />
      <Achieve />
      <Chapter />
      <ChapterPreview />
      <Pricing />
      <AuthorV2 />
      <Achievement />
      <FunFacts />
      <Booksv2 />
      <CtaV5 />
      <Testimonial />
      <CtaV4 />
      <Contact />
    </>
  );
}

export default Version01;
