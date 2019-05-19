import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

/* COMPONENTS */
import PlayerCard from '../PlayerCard';

/* STYLES */
import { TopPlayersContainer } from './styles';

const query = gql`
  {
    getReactions(query: { matchUuid: "6fcab4bc-de3b-4c37-a763-d666e5ca4f36" }) {
      participant {
        firstName
        surname
        photo
        participantRole{
          position
        }
      }
    }
  }
`;

const TopPlayers = () => {
  return (
    <TopPlayersContainer>
      <h3>JUGADORES DESTACADOS</h3>
      <div>
        <Query query={query}>
          {
            ({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>
              return data.getReactions.map(({ participant }) => (
                <PlayerCard
                  photo={participant.photo}
                  firstName={participant.firstName}
                  surname={participant.surname}
                />
              ));
            }
          }
        </Query>
      </div>
    </TopPlayersContainer>
  );
};

export default TopPlayers;
