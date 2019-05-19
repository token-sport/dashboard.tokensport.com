import styled from 'styled-components';

export const TopPlayersContainer = styled.div`
  grid-area: 3 / 1 / 3 / 4;

  & > h3 {
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin: 0 0 20px 0;
  }

  & > div:last-child {
    display: flex;
  }
`;