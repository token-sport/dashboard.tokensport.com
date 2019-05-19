import React from 'react';

/* COMPONENTS */
import Image from '../Image';
import Title from '../Title';

/* STYLES */
import { HeaderContainer } from './styles';

const Header = () => {
  return <HeaderContainer>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/leagues%2FToken%20Sport%20FC?alt=media&token=32ffbf32-208f-4431-8b9c-65feb982a55c"
      width="55px"
      height="50px"
    />
    <Title size="20px" weight="400">Dashboard</Title>
  </HeaderContainer>
};

export default Header;