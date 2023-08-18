import { useForm } from 'react-hook-form';
import {
  ConsentArea,
  ErrorText,
  Form,
  InputContainer,
  InputGroup,
} from './ContactForm.styles';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRecaptcha } from 'react-hook-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
      isConsent: false,
    },
  });

  const [captchaResponse, setCaptchaResponse] = useState(null);
  const sitekey = process.env.REACT_APP_RECAPTCHA_KEY;
  const containerId = 'test-recaptcha';
  const successCallback = (response) => {
    setCaptchaResponse(response);
  };
  const expiredCallback = () => setCaptchaResponse(null);

  useRecaptcha({
    containerId,
    successCallback,
    expiredCallback,
    sitekey,
    size: 'normal',
  });

  const onSubmit = (data) => {
    if (!captchaResponse) {
      return toast.error('Potwierdź, że jesteś człowiekiem!');
    }

    const content = { ...data, 'g-recaptcha-response': captchaResponse };

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        content,
        process.env.REACT_APP_EMAIL_KEY,
        'g-recaptcha-response'
      )
      .then(
        () => {
          toast.success('Wysłano wiadomość!');
        },
        () => {
          toast.error('Nie udało się wysłać wiadomości.');
        }
      );
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputContainer>
            <label htmlFor="user_name">Jak się do Ciebie zwracać?</label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="np. Jan Kowalski"
              {...register('user_name', { required: 'Nazwa jest wymagana!' })}
            />

            {errors.user_name?.message && (
              <ErrorText>{errors.user_name.message}</ErrorText>
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="user_email">Twój e-mail</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="np. jan.kowalski@gmail.com"
              {...register('user_email', {
                required: 'Adres e-mail jest wymagany!',
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    'Adres e-mail jest nieprawidłowy!',
                },
              })}
            />

            {errors.user_email?.message && (
              <ErrorText>{errors.user_email.message}</ErrorText>
            )}
          </InputContainer>
        </InputGroup>

        <InputContainer>
          <label htmlFor="message">Twoja wiadomość</label>
          <textarea
            id="message"
            name="message"
            placeholder="W czym mogę Ci pomóc?"
            {...register('message', {
              required: 'Treść wiadomości jest wymagana!',
              validate: {
                minLength: (v) =>
                  v.length >= 20 || 'Twoja wiadomość jest za krótka.',
              },
            })}
          />

          {errors.message?.message && (
            <ErrorText>{errors.message.message}</ErrorText>
          )}
        </InputContainer>
        <div>
          <ConsentArea>
            <input
              id="consent"
              name="consent"
              type="checkbox"
              {...register('consent', {
                required: 'Wyrażenie zgody jest wymagane!',
              })}
            />
            <label htmlFor="consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych za pomocą{' '}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                EmailJS
              </a>{' '}
              podanych w formularzu w celu umożliwienia dalszego kontaktu.
            </label>
          </ConsentArea>

          {errors.consent?.message && (
            <ErrorText>{errors.consent.message}</ErrorText>
          )}
        </div>
        <div id={containerId} className="g-recaptcha" />
        <input type="submit" value="Wyślij wiadomość" />
      </Form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactForm;
