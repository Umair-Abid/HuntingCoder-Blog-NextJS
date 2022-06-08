import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
    
    const data={uname:credentials.uname,email:credentials.email,phone:credentials.phone,textarea:credentials.textarea}
    fetch('http://localhost:3000/api/postcontact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.text())
  .then(data => console.log(data));
  };

  const [credentials, setCredentials] = useState({
    uname: "",
    email: "",
    phone: "",
    textarea: "",
  });
  const hanleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitForm}>
        <div className={styles.formlabel}>
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control"
            id="uname"
            name="uname"
            value={credentials.uname}
            onChange={hanleOnChange}
          />
        </div>
        <div className={styles.formlabel}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={hanleOnChange}
            value={credentials.email}
          />
          <div id="emailHelp" className={styles.formtext}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.formlabel}>
          <label htmlFor="exampleInputPhone1">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            onChange={hanleOnChange}
            value={credentials.phone}
            pattern="[0-9]{11}" required
          />
        </div>
        <div className={styles.formlabel}>
          <label htmlFor="floatingTextarea2">Elaborate your concern:</label>
          <textarea
            className={styles.formcontrol}
            id="textarea"
            name="textarea"
            onChange={hanleOnChange}
            value={credentials.textarea}
          ></textarea>
        </div>
        <button className={styles.button}type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
