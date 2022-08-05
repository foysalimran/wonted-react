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
import Header from "../global/header";
import Footer from "../global/footer";

const Version04 = ({headerv2, footer}) => {
  const {menuv2} = footer;
  return (
    <>
      <Header header={headerv2} />
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
      <Footer menu={menuv2} />
    </>
  );
};
export default Version04;
