import React from "react";
import Achievement from "../achievement";
import AchieveV3 from "../achievev3";
import AuthorV3 from "../authorv3";
import ChapterPreviewV2 from "../chapter-preview-v2";
import ChapterV2 from "../chapterv2";
import Contact from "../contact";
import Cta from "../cta";
import CtaV5 from "../ctav5";
import HeroV3 from "../herov3";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version03 = () => {
  return (
    <>
      <HeroV3 />
      <AchieveV3 />
      <ChapterV2 />
      <ChapterPreviewV2 />
      <Pricing />
      <Cta />
      <AuthorV3 />
      <Achievement />
      <CtaV5 />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Version03;
