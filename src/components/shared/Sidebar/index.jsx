import React from 'react';

/* COMPONENTS */
import Header from '../Header';
import NavLinks from '../NavLinks';

/* STYLES */
import { SidebarContainer } from './styles';

const Sidebar = () => {
  return <SidebarContainer>
    <Header />
    <NavLinks />
  </SidebarContainer>
};

export default Sidebar;
