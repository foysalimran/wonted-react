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
import Footer from "../global/footer";
import Header from "../global/header";
import Hero from "../hero";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version01 = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
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
      <Footer menu={menu} />
    </>
  );
}

export default Version01;
