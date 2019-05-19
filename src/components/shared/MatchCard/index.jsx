import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

/* COMPONENTS */
import TeamLive from '../TeamLive';
import Versus from '../Versus';

/* STYLES */
import { MatchCardContainer, MatchCardGrid } from './styles';

const query = gql`
  {
    findMatch(uuid: "6fcab4bc-de3b-4c37-a763-d666e5ca4f36") {
      localScore
      awayScore
      localTeamFk{
        photo
      }
      awayTeamFk{
        photo
      }
  }
  }
`;

const MatchCard = () => {
  return <MatchCardContainer>
    <MatchCardGrid>
      <Query query={query}>
        {
          ({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            const { findMatch } = data;
            console.log(findMatch)
            return (
              <Fragment>
                <p>Estadio Token Sport</p>
                <TeamLive
                  photo={findMatch.localTeamFk.photo}
                  width="80px"
                  height="80px"
                  score={findMatch.localScore}
                />
                <Versus />
                <TeamLive
                  photo={findMatch.awayTeamFk.photo}
                  width="65px"
                  height="80px"
                  score={findMatch.awayScore}
                />
              </Fragment>
            );
          }
        }
      </Query>
    </MatchCardGrid>
  </MatchCardContainer>
};

export default MatchCard;
