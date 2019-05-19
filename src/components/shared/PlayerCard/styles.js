import styled from 'styled-components';

export const TopPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;

  & > div {
    width: 100px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .2);
    padding: 5px 20px;
  }

  & > div > p {
    font-family: Nunito, sans-serif;
    font-size: 14px;
    color: white;
    text-align: center;
    margin: 0;
  }
`;
