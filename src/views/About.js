import React from 'react';
import {
  GradientText,
  SocialMediaLinks,
  StyledA,
  Wrapper,
} from './About.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const socialMedia = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/krzebietkejulia',
    icon: faFacebookF,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/photo.juliik/',
    icon: faInstagram,
  },
  {
    name: 'Behance',
    link: 'https://www.behance.net/photojulik',
    icon: faBehance,
  },
  {
    name: 'Mail',
    link: 'mailto:photo.julik@gmail.com',
    icon: faEnvelope,
  },
  {
    name: 'Phone',
    link: 'tel:+48667270099',
    icon: faPhone,
  },
];

const SocialMediaButton = ({ name, link, icon }) => {
  return (
    <StyledA key={name} href={link} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </StyledA>
  );
};

const About = () => {
  return (
    <Wrapper>
      <div>
        <h1>
          Julia <GradientText>Krzebietke</GradientText>
        </h1>

        <SocialMediaLinks>
          {socialMedia.map((social) => (
            <li key={social.name}>
              <SocialMediaButton
                name={social.name}
                link={social.link}
                icon={social.icon}
              />
            </li>
          ))}
        </SocialMediaLinks>

        <p>
          <strong>Hej! 👋</strong>
        </p>

        <p>
          Mam na imię <strong>Julia</strong>. Od małego interesowała mnie
          fotografia. Na ogół jestem nieśmiałą osobą, ale gdy trzymam w rękach
          aparat, czuję się odważniejsza. Z dnia na dzień czuję, że jestem
          lepsza w tym co robię. Uczęszczałam do{' '}
          <strong>szkoły fotograficznej</strong>, która pozwoliła mi rozwinąć
          moje zainteresowania.
        </p>

        <p>
          Zdjęcia okazyjne oraz zdjęcia portretowe to moja specjalność, ale
          jestem otwarta na wszystkie pomysły i gotowa do działania.
        </p>

        <p>
          Razem zrobimy <strong>wszystko</strong>! 📸
        </p>
      </div>
      <div></div>
    </Wrapper>
  );
};

export default About;
