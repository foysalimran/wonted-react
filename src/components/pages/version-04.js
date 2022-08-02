import React from "react";
import Achievement from "../achievement";
import AuthorV4 from "../authorv4";
import Booksv2 from "../booksv2";
import CtaV5 from "../ctav5";
import FunFacts from "../fun-facts";
import HeroV4 from "../herov4";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import CtaV4 from "../ctav4";
import Contactv2 from "../contactv2";
import Cta from "../cta";
import Headerv2 from "../global/headerv2";

const Version04 = () => {
  return (
    <>
      <Headerv2 />
      <HeroV4 />
      <AuthorV4 />
      <FunFacts bgColor="#f5ebe6" cardColor="#fff" />
      <Booksv2 />
      <Achievement />
      <CtaV5 />
      <Eventv2 />
      <Booksv3 />
      <Testimonial />
      <Blog />
      <CtaV4 />
      <Contactv2 />
      <Cta />
    </>
  );
};
export default Version04;
