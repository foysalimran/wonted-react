import React from "react";
import Aboutv6 from "../aboutv6";
import Achievement from "../achievement";
import Blog from "../blog";
import Booksv1 from "../booksv1";
import Booksv2 from "../booksv2";
import Cta from "../cta";
import Event from "../event";
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov6 from "../herov6";
import Testimonial from "../testimonial";

const Version06 = ({ headerv2, footer }) => {
  const { menuv2 } = footer;

  return (
    <>
      <Header header={headerv2} />
      <Herov6 />
      <Aboutv6 />
      <Booksv1 />
      <FunFacts />
      <Achievement />
      <Cta />
      <Event />
      <Booksv2 />
      <Testimonial />
      <Blog />
      <Footer menu={menuv2} />
    </>
  );
};

export default Version06;
