import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/img/fr.png';

const Header = styled.header`
  background-color: #fff;
  padding: 10px 0;
`;
const StyledLink = styled(Link)`
  width: 40px;
  margin: 0 auto;
  display: block;
`;
const Img = styled.img`
  width: 100%;
`;

export default () => (
  <Header>
    <StyledLink to="/">
      <Img src={Logo} />
    </StyledLink>
  </Header>
);