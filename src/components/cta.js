import React from "react";
import data from "../data/cta.json";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("You must have to write an email!!"),
});

const url =
  "https://themeatelier.us17.list-manage.com/subscribe/post?u=318da6141291eeac976c39d64&amp;id=4297abfa34";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Cta = () => {
  const { cta } = data;

  const submitForm = async (values) => {
    console.log(values);
  };

  return (
    <section
      className="cta section-padding"
      id="cta"
      style={{ backgroundImage: `url("${cta.backgroundImage}")` }}
    >
      <div className="container">
        <div className="row justify-content-center cta__inner bg-one">
          <div className="col-lg-8">
            <div className="section-title-center mb-0 text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {cta.subtitle}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {cta.title}
              </h2>
            </div>
            <div className="cta-form-box">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  // <div>
                  //   <SimpleForm
                  //     onSubmitted={(formData) => subscribe(formData)}
                  //   />
                  //   {status === "sending" && (
                  //     <div style={{ color: "blue" }}>sending...</div>
                  //   )}
                  //   {status === "error" && (
                  //     <div
                  //       style={{ color: "red" }}
                  //       dangerouslySetInnerHTML={{ __html: message }}
                  //     />
                  //   )}
                  //   {status === "success" && (
                  //     <div style={{ color: "green" }}>Subscribed !</div>
                  //   )}
                  // </div>
                  <Formik
                  initialValues={{ email: "" }}
                  onSubmit={submitForm}
                  validationSchema={SignupSchema}
                >
                  {(formik) => (
                    <Form>
                      <Field name="email"></Field>
                      <button
                        disabled={!formik.isValid || !formik.dirty}
                        className="w-100 button button__primary align-items-center"
                        id="subscribe-button"
                        type="submit"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                      >
                        <span>
                          Subscribe Now <i className="icofont-arrow-right"></i>
                        </span>
                      </button>
                      <ErrorMessage className="error-msg" name="email" />
                    </Form>
                  )}
                </Formik>
                )}
              />

              {/* subscription form start  */}
              {/* <form action="assets/subscribe/subscribe.php" id="subscribe">
                  <div
                    className="mb13"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="250"
                  >
                    <input
                      className="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      id="subscriber-email"
                    />
                  </div>
                  <button
                    className="w-100 button button__primary align-items-center"
                    id="subscribe-button"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <span
                      >Subscribe Now <i className="icofont-arrow-right"></i
                    ></span>
                  </button>
                  <div className="result">
                    <p
                      className="success-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="350"
                    >
                      <i className="icofont-check"></i> Your email has been stored!
                    </p>
                    <p
                      className="error-msg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <i className="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                </form> */}
              {/* Mailchimp subscription form  */}
              {/* <form
                  action="#"
                  id="subscribe-mailchimp"
                  data-wow-duration="1.5s"
                >
                  <div className="mb13" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                    <input
                      className="cta-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-100 button button__primary align-items-center"
                     data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                  >
                    <span>Subscribe Now <i className="icofont-arrow-right"></i></span>
                  </button>
                  <div className="result">
                    <p className="success-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                      <i className="icofont-check"></i> Your email has been stored!
                    </p>
                    <p className="error-msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                      <i className="icofont-close"></i> Sorry! Something went wrong!
                    </p>
                  </div>
                  <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                    * eBook includes iBooks, PDF &amp; ePub versions
                  </p>
                </form>  */}
              {/* <!-- subscription form end --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
