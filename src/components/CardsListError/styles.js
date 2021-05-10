import styled from 'styled-components';
import NotFoundIcon from '../../images/icons/not-found.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  margin: 86px 0 0 0;
  width: 96px;
  height: 96px;
  background-image: url(${NotFoundIcon});
  background-size: cover;
`;

export const Title = styled.h3`
  font-family: 'Roboto Slab', serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;
  margin: 31px 0 16px 0;
  color: #A9A9A9;
`;

export const Text = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #A9A9A9;
  margin: 0 0 80px 0;
  width: 245px;
`;
