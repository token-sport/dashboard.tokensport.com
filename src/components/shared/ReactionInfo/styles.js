import styled from 'styled-components';

export const ReactionInfoContainer = styled.div`
  & > p {
    font-family: Nunito, sans-serif;
    font-size: 16px;
    color: white;
    margin: 0 0 5px 0;
  }

  & > p:nth-child(2) {
    font-size: 14px;
  }

  & > p:last-child {
    font-weight: 700;
    color: ${({ reaction }) => (reaction === 'CLAP') ? '#00e5ff' : '#fe5a38'};
    margin: 20px 0 0 0;
  }
`