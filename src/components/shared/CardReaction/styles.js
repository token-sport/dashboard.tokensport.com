import styled from 'styled-components';

export const CardReactionContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .2);
  margin-left: 20px;
  padding: 15px 20px;
  margin-bottom: 30px;
  border-right: ${({ reaction }) => (reaction === 'CLAP') ? '40px solid #00e5ff' : '40px solid #fe5a38'};
`;
