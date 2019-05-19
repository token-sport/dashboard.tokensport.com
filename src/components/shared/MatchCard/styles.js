import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  width: 350px;
  height: 220px;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .2);
  border-top: 15px solid rgb(0, 252, 134);
  padding: 0 10px;
`;

export const MatchCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20px 160px;
  align-items: center;
  padding-top: 20px;
  
  & > div:last-child {
    justify-self: start;
  }

  & > p:first-child {
    grid-area: 1 / 1 / 2 / 4;
    justify-self: center;
    font-family: Nunito, sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: white;
  }
`;
