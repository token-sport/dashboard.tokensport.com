import React from 'react';
import { NavLink } from 'react-router-dom';

/* STYLES */
import { NavLinksContainer } from './styles';

const NavLinks = () => {
  return <NavLinksContainer>
    <NavLink activeClassName="selected" to="/home">Home</NavLink>
    <NavLink activeClassName="selected" to="/live">En Vivo</NavLink>
    <NavLink activeClassName="selected" to="/matches">Partidos</NavLink>
    <NavLink activeClassName="selected" to="/tournaments">Torneos</NavLink>
  </NavLinksContainer>
};

export default NavLinks;
