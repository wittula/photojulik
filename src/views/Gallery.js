import React from 'react';
import PhotoAlbum from 'react-photo-album';
import { GalleryContainer } from './Gallery.styles';
import { useGetPhotos } from 'hooks/useRequest';

const Gallery = () => {
  const { data, error, isLoading } = useGetPhotos();

  if (error) return <h2>Coś poszło nie tak...</h2>;
  if (isLoading) return <h2>Wczytywanie...</h2>;

  return (
    <>
      <GalleryContainer>
        <h2>Galeria</h2>
        <PhotoAlbum photos={data} layout="rows" />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
