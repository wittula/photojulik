import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ConsentArea, Form, InputGroup } from './Contact.styles';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const toggleConsent = () => {
    setFormData({ ...formData, consent: !formData.consent });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.consent) return;

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
    <>
      <h2>Kontakt</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <InputGroup>
          <input
            type="text"
            name="user_name"
            placeholder="Twoja nazwa"
            value={formData.user_name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Twój e-mail"
            value={formData.user_email}
            onChange={handleInputChange}
          />
        </InputGroup>
        <textarea
          name="message"
          placeholder="Twoja wiadomość"
          value={formData.message}
          onChange={handleInputChange}
        />
        <ConsentArea>
          <input
            type="checkbox"
            id="consent"
            value={formData.consent}
            onClick={toggleConsent}
          />
          <label htmlFor="consent">Zgadzam się</label>
        </ConsentArea>
        <input type="submit" value="Wyślij" disabled={!formData.consent} />
      </Form>
    </>
  );
};

export default Contact;
