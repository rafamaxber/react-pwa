import React from 'react';
import styled from 'styled-components';

const ProductDefault = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 140px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 5px;
`;
const ProductImage = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const ProductTitle = styled.div`
  font-size: 14px;
`;
const Highlight = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;
const ProductPrice = styled.div``;

export default ({ title, highlight, imgSrc, description, priceTo, priceFrom, goTo }) => (
  <ProductDefault>
    <ProductImage>
      <Img src={imgSrc} />
    </ProductImage>
    {
      highlight && 
      <ProductTitle>
        <Highlight className="highlight">
          { highlight }&nbsp; 
        </Highlight>
        { title }
      </ProductTitle>
    }
      <ProductPrice>
      { priceTo }
      </ProductPrice>
  </ProductDefault>
);