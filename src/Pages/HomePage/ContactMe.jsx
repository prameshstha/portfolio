import React from "react";

const ContactMe = () => {
  return (
    <div className="main__div__contact">
      {/* start sectoion contact */}
      <div id="contact" className="w-50">
        <h2 className="mb-30">GET IN TOUCH</h2>
        <form method="post" role="form" className="contactForm">
          <div className="row">
            <div id="sendmessage" />
            <div id="errormessage" />
            <div className="col-lg-6">
              <div className="form-group contact-block1">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group contact-block1">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group contact-block1">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  required
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group contact-block1">
                <textarea
                  className="form-control"
                  name="message"
                  rows={12}
                  id="message"
                  required
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  defaultValue={""}
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-lg-12">
              <button
                type="submit"
                className="btn btn-defeault btn-send"
                value="Send message"
                id="send"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* start sectoion contact */}
    </div>
  );
};

export default ContactMe;
