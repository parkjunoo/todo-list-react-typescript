import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid black;
`;

function NavBar() {
  return <NavBarWrapper></NavBarWrapper>;
}

export default NavBar;
