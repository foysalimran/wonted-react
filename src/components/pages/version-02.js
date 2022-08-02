import React from "react";
import AchievementV2 from "../achievementv2";
import AchieveV2 from "../achievev2";
import Author from "../author";
import ChapterPreviewV2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import CtaV2 from "../ctav2";
import FunFacts from "../fun-facts";
import Herov2 from "../herov2";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version02 = () => {
  return (
    <>
      <Herov2 />
      <AchieveV2 />
      <Chapterv2 />
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
