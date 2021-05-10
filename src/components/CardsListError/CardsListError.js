import React from 'react';
import { CARDS_LIST_ERROR_TEXT, CARDS_LIST_ERROR_TITLE } from '../../utils/constants';

import {
  Container, Icon, Title, Text,
}
  from './styles';

function CardsListError({ type }) {
  return (
    <Container>
      <Icon />
      <Title>
        {CARDS_LIST_ERROR_TITLE[type]}
      </Title>
      <Text className="not-found__text">
        {CARDS_LIST_ERROR_TEXT[type]}
      </Text>
    </Container>
  );
}

export default CardsListError;
