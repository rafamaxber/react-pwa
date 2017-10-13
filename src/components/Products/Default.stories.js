import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductDefault from './Default';

const obj = {
  highlight: 'Pacote',
  title: '200 Fotos',
  imgSrc: 'https://sh.digipix.com.br/subhomes/_lojas_consumer/landing/2017/aniversario/img/prod-200.png?v1',
  description: 'Eternize suas memórias',
  priceTo: '96,00',
  priceFrom: '42,00',
  goTo: 'https://www.fotoregistro.com.br/aniversario-fotoregistro/l/',
}

storiesOf('ProductDefault', module)
  .add('ProductDefault', () => (
    <ProductDefault {...obj}></ProductDefault>
  ));