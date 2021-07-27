import styles from '../../styles/Form.module.scss'
import { Formik } from 'formik';
import emailjs from 'emailjs-com';
import React, { useState } from "react";


export default function Form() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

    function sendEmail(object) {
        emailjs.sendForm('service_htlhg6k', 'template_1wx9xfj', object, 'user_Kbnfw1KhzCwSI5HwFtbYf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <div className={styles.form}>
        <div className={styles.formbox}>
        <h2>Contact us!</h2>
        <form className="contact-form" onSubmit={sendEmail}>
        <div className={styles.labelbox}>
                <label>Name</label>    
                <input
                    type='text'
                    name='name'
                    className='form-control formInput'
                    placeholder='Your email'
                ></input>
            </div>
            <div className={styles.labelbox}>
                <label>Email</label>    
                <input
                    type='email'
                    name='email'
                    onChange={validateEmail}
                    className='form-control formInput'
                    placeholder='Your email'
                ></input>
            </div>
            <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
            <div className={styles.labelbox}>
                <textarea
                    rows={4}
                    name='message'
                    className='form-control formInput'
                    placeholder='Message'
                ></textarea>
            </div>
            <div className={styles.submitbox}>  
                <button className='submit-btn' type='submit'>Send</button>
            </div>
            </form>
            </div>
        
        </div>
  )
}