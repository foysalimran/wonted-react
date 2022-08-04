import React from "react";
import data from "../data/herov1.json";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://themeatelier.us17.list-manage.com/subscribe/post?u=318da6141291eeac976c39d64&amp;id=4297abfa34";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  let email;
  const submit = (e) => {
    e.preventDefault()
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };

  return (
    <form>
      <div
        className="input-group"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="750"
      >
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <button className="button button__primary" onClick={submit}>
          <span>Subscribe</span>
        </button>
      </div>
      <div className="message col m-10px-t hero__subscribe__form__message">
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
          className="alert alert-success hero__subscribe__form__success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
}

const Hero = () => {
  const { herov1 } = data;
  return (
    // <!-- ========== Hero section start ========== -->
    <section
      id="hero"
      className="hero hero__padding overflow-hidden position-relative bg-one"
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 m-0px-b md-m-30px-b">
            <div className="hero__content position-relative">
              <div
                className="badge-text mb-2 text-uppercase"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                {herov1.subtitle}
              </div>
              <h1
                className="display-4 mb-4 text-capitalize"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
              >
                {herov1.title}
              </h1>
              <p
                className="text-muted mb-5 fs-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                {herov1.description}
              </p>
              <MailchimpSubscribe
                url={url}
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
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="hero__images text-center">
              <img className="img-fluid" src={herov1.image} alt="" />
              <div className="hero__images--badge">
                <span>
                  <span className="hero__images--badge--text1">
                    {herov1.tagTitle}
                  </span>
                  <span className="hero__images--badge--text2">
                    {herov1.tagText}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <!-- ========== Hero section start ========== -->
  );
};

export default Hero;
