import React from "react";
import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-css">
      <div className="container col-md-6">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-form">
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder=" FullName"
                    name="fullname"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="mobile"
                    className="form-control"
                    id="number"
                    placeholder="phone"
                    name="number"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="subject"
                    name="subject"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
