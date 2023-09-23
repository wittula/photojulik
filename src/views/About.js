import React from 'react';
import {
  Content,
  Description,
  GradientText,
  ProfilePicture,
  SocialMediaLinks,
  StyledA,
  StyledMessage,
  Wrapper,
} from './About.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMedia from 'data/socials';
import avatarPhoto from 'assets/images/profile.webp';

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
      <Content>
        <ProfilePicture
          src={avatarPhoto}
          alt="Zdjęcie profilowe przedstawiające Julię"
        />
        <div>
          <h1>
            Julia <GradientText>Krzebietke</GradientText>
          </h1>

          <SocialMediaLinks>
            {Object.values(socialMedia).map((value) => (
              <li key={value.name}>
                <SocialMediaButton
                  name={value.name}
                  link={value.link + value.value}
                  icon={value.icon}
                />
              </li>
            ))}
          </SocialMediaLinks>
        </div>
      </Content>
      <Content>
        <Description>
          <StyledMessage delay=".5">
            <strong>Hej! 👋</strong>
          </StyledMessage>

          <StyledMessage delay="1">
            Mam na imię <strong>Julia</strong>. Od małego interesowała mnie
            fotografia. Na ogół jestem nieśmiałą osobą, ale gdy trzymam w rękach
            aparat, czuję się odważniejsza. Z dnia na dzień czuję, że jestem
            lepsza w tym co robię. Uczęszczałam do{' '}
            <strong>szkoły fotograficznej</strong>, która pozwoliła mi rozwinąć
            moje zainteresowania.
          </StyledMessage>

          <StyledMessage delay="1.5">
            Zdjęcia okazyjne oraz zdjęcia portretowe to moja specjalność, ale
            jestem otwarta na wszystkie pomysły i gotowa do działania.
          </StyledMessage>

          <StyledMessage delay="2">
            Razem zrobimy <strong>wszystko</strong>! 📸
          </StyledMessage>
        </Description>
      </Content>
    </Wrapper>
  );
};

export default About;
