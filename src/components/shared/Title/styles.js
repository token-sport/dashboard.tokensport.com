import styled from 'styled-components';

export const TitleContainer = styled.h1`
  font-family: Nunito, sans-serif;
  font-size: ${({ size }) => size ? size : '36px'};
  font-weight: ${({ weight }) => weight ? weight : '400'};
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none' };
  color: white;
  margin: 0;
`;
