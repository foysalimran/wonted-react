import React from "react";
import Achievement from "../achievement";
import AchieveV3 from "../achievev3";
import AuthorV4 from "../authorv4";
import Booksv2 from "../booksv2";
import ChapterPreviewV2 from "../chapter-preview-v2";
import ChapterV2 from "../chapterv2";
import Contact from "../contact";
import Cta from "../cta";
import CtaV5 from "../ctav5";
import FunFacts from "../fun-facts";
import HeroV4 from "../herov4";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version04 = () => {
  return (
    <>
      <HeroV4 />
      <AuthorV4 />
      <FunFacts  bgColor="#f5ebe6" cardColor="#fff"/>
      <Booksv2 />
      <Achievement />
      <CtaV5 />
      <Cta />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Version04;
