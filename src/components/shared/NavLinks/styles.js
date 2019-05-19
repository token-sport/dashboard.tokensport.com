import styled from 'styled-components';

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    font-family: Nunito, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 10px;
    padding: 10px 0 10px 20px;
  }
`;