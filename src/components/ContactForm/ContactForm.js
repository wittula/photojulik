import { useForm } from 'react-hook-form';
import {
  ConsentArea,
  ErrorText,
  Form,
  InputContainer,
  InputGroup,
} from './ContactForm.styles';
import React from 'react';
import emailjs from '@emailjs/browser';

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

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (!formData.consent) return;

  //   emailjs
  //     .sendForm(
  //       'photojulik',
  //       'photojulik_contact',
  //       form.current,
  //       process.env.REACT_APP_EMAIL_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const onSubmit = (data) => {
    emailjs
      .send(
        'photojulik',
        'photojulik_contact',
        data,
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
    reset();
  };

  return (
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
      <input type="submit" value="Wyślij wiadomość" />
    </Form>
  );
};

export default ContactForm;
