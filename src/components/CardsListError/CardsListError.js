import React from 'react';
import styled from 'styled-components';

import { CARDS_LIST_ERROR_TEXT, CARDS_LIST_ERROR_TITLE } from '../../utils/constants';

import {
  Container, IconStyles, Title, Text,
}
  from './styles';

const Icon = styled.div`${IconStyles}`;

function CardsListError({ type }) {
  return (
    <Container>
      <Icon type={type} />
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
