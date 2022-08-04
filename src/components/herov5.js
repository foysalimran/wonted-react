import React from 'react';
import data from "../data/herov1.json"
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
      <div class="message col m-10px-t hero__subscribe__form__message">
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

const Herov5 = () => {
    const {herov5} = data;
    return (
        <section
        id="hero"
        class="hero hero__padding overflow-hidden position-relative bg-one"
      >
        <div class="circle x1"></div>
        <div class="circle x2"></div>
        <div class="circle x3"></div>
        <div class="circle x4"></div>
        <div class="circle x5"></div>
        <div class="container">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="hero__content position-relative">
              <div
                  className="badge-text mb-2 fs-3 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  Hello,
                </div>
                <h1
                  className="display-4 mb-2 text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="750"
                >
                  I am {herov5.name}
                </h1>
                <div
                  className="badge-text mb-4 fs-5 fw-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                 {herov5.title}
                </div>
                <p
                  className="mb-5 fs-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="850"
                >
                  {herov5.description}
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
              class="col-lg-6 d-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div class="hero__book">
                <div class="hero__book--wrapper">
                  <img class="img-fluid" src={herov5.bookImage} alt="" />
                </div>
              </div>
              <div class="hero__author text-center">
                <div class="hero__author--inner hero__author--inner2">
                  <div
                    class="hero__author--inner--pic hero__author--inner2--pic d-flex align-items-end justify-content-center"
                    style={{backgroundImage: `url(${herov5.writerImage})`}}
                  ></div>
                  <div class="frame frame-1"></div>
                  <div class="frame frame-2"></div>
                  <div class="frame frame-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Herov5;