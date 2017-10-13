import React from 'react';
import styled from 'styled-components';
import Header from '../Header/';

const Container = styled.div`
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export default ({ children }) => (
  <Container>
    <Header></Header>
    <Main>
      { children }
    </Main>
  </Container>
);