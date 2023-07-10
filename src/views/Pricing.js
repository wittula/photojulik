import React from 'react';
import { useGetPrices } from 'hooks/useRequest';
import { StyledListItem, PriceList } from './Pricing.styles';
import studioBackground from 'assets/images/studio.webp';
import plenerBackground from 'assets/images/plener.webp';
import partyBackground from 'assets/images/party.webp';

const PriceElement = ({ background, description, price }) => {
  return (
    <StyledListItem background={background}>
      <span>{description}</span>
      <span>{price}</span>
    </StyledListItem>
  );
};

const Pricing = () => {
  const { data, error, isLoading } = useGetPrices();

  if (error) return <h2>Coś poszło nie tak...</h2>;
  if (isLoading) return <h2>Wczytywanie...</h2>;

  return (
    <>
      <h2>Cennik</h2>

      <PriceList>
        <PriceElement
          background={studioBackground}
          description="Sesja studio"
          price={data.studio}
        />
        <PriceElement
          background={plenerBackground}
          description="Sesja plenerowa"
          price={data.plener}
        />
        <PriceElement
          background={partyBackground}
          description="Sesja imprezowa"
          price={data.party}
        />
      </PriceList>
    </>
  );
};

export default Pricing;
