/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CtaV3 from "../ctav3";
import data from "../../data/footer.json";
import { Link } from "react-scroll";

const Footerv2 = () => {
  const { footerv2 } = data;
  return (
    <>
      <CtaV3 />
      <footer className="footer bg-one overflow-hidden">
        <div className="container">
          <div className="footer__top m-50px-t m-50px-b">
            <div className="row">
              <div
                className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                <a href="/">
                  {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
                  <img src={footerv2.logo} alt="Wonted" />
                </a>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
                <ul className="footer__menu">
                  {footerv2.menu?.map((data, i) => (
                    <li
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      <Link
                        activeClass="active"
                        className="benefits"
                        to={`${data.link}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        offset={-60}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-end">
                <ul className="social-icon">
                  {footerv2.social?.map((data, i) => (
                    <li
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      {data.link === "" ? (
                        ""
                      ) : (
                        <a href={data.link}>
                          <img
                            className="img-fluid"
                            src={data.icon}
                            alt="icon"
                            width="25"
                            height="25"
                          />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer__copyright m-20px-t m-20px-b">
            <div className="row">
              <div className="col-12">
                <p className="m-0 text-center">
                  &copy; {footerv2.copyright}
                  <img
                    className="img-fluid"
                    src={footerv2.icon}
                    alt="footer icon"
                    width="20"
                    height="20"
                  />{" "}
                  by <a href="#">{footerv2.name}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <!-- ========== Footer section End ========== -->
  );
};

export default Footerv2;
