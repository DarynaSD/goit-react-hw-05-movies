import React from 'react'
import { NavLink } from 'react-router-dom';
import { HederWrap, NavLinkWrap } from './Parts.styled';


const Header = () => {
  return (
    <HederWrap>
      <nav>
        <NavLinkWrap>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="movies" className="nav-item">
            Movies
          </NavLink>
        </NavLinkWrap>
      </nav>
    </HederWrap>

  );
}

export default Header
