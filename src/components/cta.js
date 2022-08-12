import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import data from "../data/cta.json";
import { mailchimpLink } from "../global";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button
        className="w-100 button button__primary align-items-center aos-init"
        onClick={submit}
      >
        <span>Submit</span>
      </button>
      <div className="message col m-10px-t">
        {status === "sending" && (
          <div className=" alert alert-warning">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}

const Cta = ({ isBg }) => {
  const { cta } = data;
  return (
    <section
      className={`cta section-padding ${isBg === "yes" ? "bg-one" : ""}`}
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
                url={mailchimpLink.link}
                render={({ subscribe, status, message }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
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
