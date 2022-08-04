import React from "react";

function NewsLetterForm({ status, message, onValidated }) {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };

  return (
    <div>
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
      <div class="message col m-10px-t">
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

export default NewsLetterForm;
