import React from "react";
import AchievementV2 from "../achievementV2";
import AchieveV2 from "../achieveV2";
import Author from "../author";
import ChapterPreviewV2 from "../chapter-preview-v2";
import ChapterV2 from "../chapterV2";
import Contact from "../contact";
import CtaV2 from "../ctaV2";
import FunFacts from "../fun-facts";
import HeroV2 from "../heroV2";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version02 = () => {
  return (
    <>
      <HeroV2 />
      <AchieveV2 />
      <ChapterV2 />
      <CtaV2 />
      <ChapterPreviewV2 />
      <Pricing />
      <Author />
      <AchievementV2 />
      <FunFacts />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Version02;
