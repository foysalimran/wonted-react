import React from "react";
import Achievement from "../achievement";
import Authorv4 from "../authorv4";
import Booksv2 from "../booksv2";
import Ctav5 from "../ctav5";
import FunFacts from "../fun-facts";
import Herov4 from "../herov4";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import Ctav4 from "../ctav4";
import Contactv2 from "../contactv2";
import Cta from "../cta";
import Headerv2 from "../global/headerv2";
import Footerv2 from "../global/footerv2";

const Version04 = () => {
  return (
    <>
      <Headerv2 />
      <Herov4 />
      <Authorv4 />
      <FunFacts bgColor="#f5ebe6" cardColor="#fff" />
      <Booksv2 />
      <Achievement />
      <Ctav5 />
      <Eventv2 />
      <Booksv3 />
      <Testimonial />
      <Blog />
      <Ctav4 />
      <Contactv2 />
      <Cta />
      <Footerv2 />
    </>
  );
};
export default Version04;
