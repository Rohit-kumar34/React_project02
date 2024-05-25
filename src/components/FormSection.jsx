import React from "react";
import { useState } from "react";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className="form_container">
      <div>
        <form onSubmit={onSubmit}>
          <div className="form_controller">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="form_btn">Submit</button>
          <div className="get_data">
            <h1>{name}</h1>
            <h1>{email}</h1>
            <p>{text}</p>
          </div>
        </form>
      </div>
      <div className="form_image">
        <img src="./images/contact_logo.png" alt="contact_image" />
      </div>
    </section>
  );
};

export default FormSection;
