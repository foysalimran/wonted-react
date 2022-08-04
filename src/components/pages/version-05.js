import React from "react";
import CtaV5 from "../ctav5";
import FunFacts from "../fun-facts";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import CtaV4 from "../ctav4";
import Herov5 from "../herov5";
import AuthorV2 from "../authorv2";
import Booksv1 from "../booksv1";
import AchievementV2 from "../achievementv2";
import Contact from "../contact";
import Headerv2 from "../global/headerv2";
import Footerv2 from "../global/footerv2";

const Version05 = () => {
  return (
    <>
    <Headerv2 />
      <Herov5 />
      <AuthorV2 />
      <Booksv1 /> 
      <FunFacts />
      <Booksv3 bgColor="#f5ebe6"/>
      <AchievementV2 bgColor="#fff"/>
      <Eventv2 />
      <Testimonial bgColor="#fff" cardColor="#f5ebe6"/>
      <CtaV5 />
      <Blog />
      <CtaV4 />
      <Contact />
      <Footerv2 />
    </>
  );
};
export default Version05;
