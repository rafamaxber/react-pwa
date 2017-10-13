import React from 'react';
import styled from 'styled-components';

const ProductDefault = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ProductImage = styled.div``;
const Img = styled.img``;
const ProductTitle = styled.div``;
const Highlight = styled.span``;

export default ({ title, highlight, imgSrc, description, priceTo, priceFrom, goTo }) => (
  <ProductDefault>
    <ProductImage>
      <Img src={imgSrc} />
    </ProductImage>
    {
      highlight && 
      <ProductTitle>
        <Highlight>
          { highlight }
        </Highlight>
        { title }
      </ProductTitle>}
  </ProductDefault>
);