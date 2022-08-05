import React from "react";
import Achievement from "../achievement";
import Achievev3 from "../achievev3";
import Authorv3 from "../authorv3";
import ChapterPreviewv2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import Cta from "../cta";
import CtaV5 from "../ctav5";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov3 from "../herov3";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version03 = ({header, footer}) => {
  const {menu} = footer;
  return (
    <>
      <Header header={header}/>
      <Herov3 />
      <Achievev3 />
      <Chapterv2 />
      <ChapterPreviewv2 />
      <Pricing />
      <Cta />
      <Authorv3 />
      <Achievement />
      <CtaV5 />
      <Testimonial />
      <Contact />
      <Footer menu={menu}/>
    </>
  );
};

export default Version03;
