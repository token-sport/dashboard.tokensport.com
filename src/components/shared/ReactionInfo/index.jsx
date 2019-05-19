import React from 'react';

/* STYLES */
import { ReactionInfoContainer } from './styles';

const ReactionInfo = ({ reaction }) => {
  return <ReactionInfoContainer reaction={reaction.reaction}>
    <p>{ reaction.name } - { reaction.position }</p>
    <p>{ reaction.team }</p>
    <p>{ reaction.reaction }</p>
  </ReactionInfoContainer>
};

export default ReactionInfo;
