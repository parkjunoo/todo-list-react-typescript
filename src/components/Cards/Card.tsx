import React from 'react';
import Styled from './Card.styled';

type CardProps = {
  name: string;
  mark: string;
};

function Card({ name, mark }: CardProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Card.defaultProps = {
  mark: '',
};

export default Card;
