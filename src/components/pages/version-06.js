import React from "react";
import Aboutv6 from "../aboutv6";
import Achievement from "../achievement";
import Blog from "../blog";
import Booksv1 from "../booksv1";
import Booksv2 from "../booksv2";
import Cta from "../cta";
import Event from "../event";
import FunFacts from "../fun-facts";
import Headerv2 from "../global/headerv2";
import Herov6 from "../herov6";
import Testimonial from "../testimonial";

const Version06 = () => {
  return (
    <>
      <Headerv2 />
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
    </>
  );
};

export default Version06;
