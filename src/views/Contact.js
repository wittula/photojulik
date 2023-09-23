import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactIcon, Wrapper } from './Contact.styles';
import { ContactData } from './Contact.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMedia from 'data/socials';

const Contact = () => {
  return (
    <>
      <h2>Kontakt</h2>
      <Wrapper>
        <ContactForm />
        <ContactData>
          <ul>
            {Object.values(socialMedia).map((value) => (
              <li key={value.name}>
                <a
                  href={value.link + value.value}
                  key={value.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactIcon>
                    <FontAwesomeIcon icon={value.icon} />
                  </ContactIcon>
                  <span>
                    {value.name === 'Phone'
                      ? value.value.replace(
                          /(\d{2})(\d{3})(\d{3})(\d{3})/,
                          '$1 $2 $3 $4'
                        )
                      : value.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </ContactData>
      </Wrapper>
    </>
  );
};

export default Contact;
