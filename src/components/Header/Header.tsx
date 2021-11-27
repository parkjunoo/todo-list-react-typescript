import React from 'react';
import PropTypes from 'prop-types';
import Styled from './Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <Styled.HeaderWrapper>
      I dont know what to do
      <FontAwesomeIcon icon={['fas', 'coffee']} size="2x" />
    </Styled.HeaderWrapper>
  );
}
Header.propTypes = {};

export default Header;
