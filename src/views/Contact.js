import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'photojulik',
        'photojulik_contact',
        form.current,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Twoja nazwa" />
      <input type="email" name="user_email" placeholder="Twój e-mail" />
      <textarea name="message" placeholder="Twoja wiadomość" />
      <input type="submit" value="Wyślij" />
    </form>
  );
};

export default Contact;
