import React from "react";
import Ctav5 from "../ctav5";
import FunFacts from "../fun-facts";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import Ctav4 from "../ctav4";
import Herov5 from "../herov5";
import AuthorV2 from "../authorv2";
import Booksv1 from "../booksv1";
import AchievementV2 from "../achievementv2";
import Contact from "../contact";
import Footerv2 from "../global/footerv2";
import Header from "../global/header";

const Version05 = ({ headerv2 }) => {
  return (
    <>
      <Header header={headerv2} />
      <Herov5 />
      <AuthorV2 />
      <Booksv1 />
      <FunFacts />
      <Booksv3 bgColor="#f5ebe6" />
      <AchievementV2 bgColor="#fff" />
      <Eventv2 />
      <Testimonial bgColor="#fff" cardColor="#f5ebe6" />
      <Ctav5 />
      <Blog />
      <Ctav4 />
      <Contact />
      <Footerv2 />
    </>
  );
};
export default Version05;
