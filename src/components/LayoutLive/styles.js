import styled from 'styled-components';

export const LayoutLiveContainer = styled.div`
  display: grid;
  height: calc(100vh - 80px);
  grid-template-columns: 50% 50%;
  grid-template-rows: 70px 1fr 1fr;
  grid-gap: 50px 0;

  & > div:first-child {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;
  }

  & > div:nth-child(2) {
    justify-self: center;
    align-self: center;
  }

  & > div > p {
    font-family: Nunito, sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: white;
    margin: 5px 0 0 0;
  }
`;