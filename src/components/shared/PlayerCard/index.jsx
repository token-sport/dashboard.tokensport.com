import React from 'react';

import Image from '../Image';

/* STYLES */
import { TopPlayerContainer } from './styles';

const PlayerCard = ({ photo, firstName, surname }) => {
  return <TopPlayerContainer>
    <Image src={photo} width="80px" height="80px"/>
    <div>
      <p>{ firstName } { surname }</p>
    </div>
  </TopPlayerContainer>
};

export default PlayerCard;
