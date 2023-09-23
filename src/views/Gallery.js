import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { GalleryContainer } from './Gallery.styles';
import { useGetPhotos } from 'hooks/useRequest';

const Gallery = () => {
  const { data, error, isLoading } = useGetPhotos();
  const [index, setIndex] = useState(-1);

  if (error)
    return (
      <GalleryContainer>
        <h2>Coś poszło nie tak...</h2>
      </GalleryContainer>
    );
  if (isLoading)
    return (
      <GalleryContainer>
        <h2>Wczytywanie...</h2>
      </GalleryContainer>
    );

  return (
    <GalleryContainer>
      <h2>Galeria</h2>
      <PhotoAlbum
        photos={data}
        layout="columns"
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 4;
        }}
      />
      <Lightbox
        index={index}
        slides={data}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </GalleryContainer>
  );
};

export default Gallery;
