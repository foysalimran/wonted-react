import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import data from "../data/cta.json";
import NewsLetterForm from "./NewsLetterForm";

const url =
  "https://themeatelier.us17.list-manage.com/subscribe/post?u=318da6141291eeac976c39d64&amp;id=4297abfa34";


const Cta = () => {
  const { cta } = data;
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

                  <NewsLetterForm
                  status={status}
              message={message}
              onValidated={formData => subscribe(formData)} />
                  

                )}
              />

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
