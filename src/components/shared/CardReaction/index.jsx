import React from 'react';

/* COMPONENTS */
import ReactionInfo from '../ReactionInfo';

/* STYLES */
import { CardReactionContainer } from './styles';

const CardReaction = ({ reaction }) => {
  return <CardReactionContainer reaction={reaction.reaction}>
    <ReactionInfo reaction={reaction}/>
  </CardReactionContainer>
};

export default CardReaction;
