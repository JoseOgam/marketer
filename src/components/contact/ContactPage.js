import React, { useState } from "react";
import "../styles/contact.css";

const ContactPage = () => {
  var [contacts, setContact] = useState([]);
  var [fullname, setFullname] = useState("");
  var [email, setEmail] = useState("");
  var [number, setNumber] = useState("");
  var [subject, setSubject] = useState("");
  var [message, setMessage] = useState("");

  var handleContacts = (e) => {
    e.preventDefault();
    setContact([...contacts, [fullname, email, number, subject, message]]);
  };
  return (
    <div className="contact-css">
      <div className="container col-md-6">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleContacts} className="contact-form">
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder=" FullName"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
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
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
