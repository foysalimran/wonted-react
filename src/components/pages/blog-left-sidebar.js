/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../global/header";
import Footer from "../global/footer";
import Breadcrumbs from "../breadcrumbs";
import BlogLeftSidebars from "../blog-left-sidebars";

const BlogLeftSidebar = ({ headerv3, footer }) => {
  const { menuv3 } = footer;

  return (

    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="Blog left sidebar" />
      <BlogLeftSidebars isBg=""/>
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default BlogLeftSidebar;
