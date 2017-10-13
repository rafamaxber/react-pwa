import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import Header from './index';

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('Header', () => (
    <Header></Header>
  ));