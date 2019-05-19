import styled from 'styled-components';

export const ListReactionsContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  padding-left: 20px;
  padding-right: 40px;
  border-left: 2px solid rgba(173, 173, 173, .05);

  & > div {
    padding: 10px;
    height: 200px;
    overflow-y: scroll;
  }

  & > div > p {
    font-family: Nunito, sans-serif;
    color: white;
  }

  & > h4 {
    font-family: Nunito, sans-serif;
    font-weight: 400;
    color: white;
    margin: 10px 0 20px 20px;
  }
`;
