import React from 'react';
import { Wrapper } from './Gallery.styles';
import Wave from 'react-wavify';
import { theme } from 'assets/styles/theme';

const Gallery = () => {
  return (
    <>
      <Wave
        fill={theme.colors.headerBackground}
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.15,
          points: 3,
        }}
        className="wave"
      ></Wave>
      <Wrapper>
        <h2>Galeria</h2>
        <p>Lorem ipsum</p>
      </Wrapper>
      <Wave
        fill={theme.colors.headerBackground}
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.15,
          points: 2,
        }}
        className="wave flip"
      ></Wave>
    </>
  );
};

export default Gallery;
