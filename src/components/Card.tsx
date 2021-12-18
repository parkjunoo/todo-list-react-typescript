import React from 'react';
import styled from 'styled-components';

interface CardProps {
  index: number;
  contents?: string;
  onClickDeleteCard: (e: number) => void;
}

function Card({ index, onClickDeleteCard, contents }: CardProps) {
  return (
    <CardWrapper>
      <div className={'card-top-wrapper'}>
        <div>
          <div onClick={() => onClickDeleteCard(index)}>-</div>
          <div>M</div>
        </div>
      </div>
      <div>{contents}</div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100px;
  max-height: 300px;
  background-color: #ffffff99;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #38424a70;
  .card-top-wrapper {
    position: relative;
    height: 20px;
    border: 1px solid #38424a70;
    border-radius: 5px 5px 0px 0px;
  }
`;
export default Card;
