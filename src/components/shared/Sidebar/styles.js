import styled from 'styled-components';

export const SidebarContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px 150px auto;
  grid-gap: 100px 0;
  position: relative;
  left: 0;
  top: 0;
  width: calc(20% - 50px);
  height: calc(100vh - 80px);
  background-color: #16192a;
  padding: 40px 50px;
`;