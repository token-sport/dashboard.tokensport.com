import React from 'react';

/* COMPONENTS */
import MainContent from '../shared/MainContent';
import Title from '../shared/Title';
import MatchCard from '../shared/MatchCard';
import ListReaction from '../shared/ListReactions';
import TopPlayers from '../shared/TopPlayers';

/* STYLES */
import { LayoutLiveContainer } from './styles';

const reaction = {
  name: 'Juan Quintero',
  position: 'MCO',
  team: 'River Plate',
  reaction: 'CLAP'
}

const Live = () => {
  return <MainContent>
    <LayoutLiveContainer>
      <div>
        <Title size="20px" weight="700" uppercase>Partido en Vivo</Title>
        <p>Torneo: Liga Token Sport</p>
      </div>
      <MatchCard />
      <ListReaction reaction={ reaction }/>
      <TopPlayers />
    </LayoutLiveContainer>
  </MainContent>
};

export default Live;