import React from 'react';

/* STYLES */
import { ImageContainer } from './styles';

const Image = ({ src, width, height }) => {
  return <ImageContainer
    src={src}
    width={width}
    height={height}/>
};

export default Image;
