import React from 'react';

/* COMPONENTS */
import Image from '../Image';

/* STYLES */
import { TeamLiveContainer } from './styles';

const TeamLive = ({ photo, score, width, height }) => {
  return <TeamLiveContainer>
    <Image src={photo} width={width} height={height}/>
    <p>{ score }</p>
  </TeamLiveContainer>
};

export default TeamLive;