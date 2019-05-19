import React from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';

/* COMPONENTS */
import CardReaction from '../CardReaction';

/* STYLES */
import { ListReactionsContainer } from './styles';

/* SUBSCRIPTION */
const REACTION_SUBSCRIPTION = gql`
  subscription onReactionCreated{
    reactionCreated{
      name
      position
      team
      reaction
    }
  }
`;

const ListReactions = ({ reaction }) => {
  return <ListReactionsContainer reaction={reaction.reaction}>
    <h4>Reacciones</h4>
    <div>
      <Subscription subscription={REACTION_SUBSCRIPTION}>
        {
          ({ data, loading }) => {
            {/* const { reactionCreated } = data; */}
            if (loading) return <p>No hay Reacciones aun :(</p>
            if (data) {console.log(data.reactionCreated.name)}

            return(
              <CardReaction reaction={data.reactionCreated}/>
          )}
        }
      </Subscription>
    </div>
  </ListReactionsContainer>
};

export default ListReactions;