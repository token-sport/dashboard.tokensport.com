import React from 'react';

/* STYLES */
import { TitleContainer } from './styles';

const Title = ({ size, children, weight, uppercase }) => {
  return <TitleContainer
    size={size}
    weight={weight}
    uppercase={uppercase}>
    { children }
  </TitleContainer>
};

export default Title;
