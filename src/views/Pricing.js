import React from 'react';
import { useGetPrices } from 'hooks/useRequest';

const Pricing = () => {
  const { data, error, isLoading } = useGetPrices();

  if (error) return <h2>Coś poszło nie tak...</h2>;
  if (isLoading) return <h2>Wczytywanie...</h2>;

  return (
    <>
      <h2>Cennik</h2>
      <p>Sesja studio: {data.studio}</p>
      <p>Sesja plener: {data.plener}</p>
      <p>Sesja imprezowa: {data.party}</p>
    </>
  );
};

export default Pricing;
