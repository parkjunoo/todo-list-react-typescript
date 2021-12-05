import styled from 'styled-components';

export default {
  CardWrapper: styled.div`
    width: 95%;
    height: 100px;
    margin-left: 4px;
    max-height: 300px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
  `,

  CardTop: styled.div`
    position: relative;
    height: 20px;
    border: 1px solid black;
    background-color: gray;
  `,

  CardButtonWrapper: styled.div`
    position: absolute;
    right: 0;
  `,

  DeleteCardButton: styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0px 4px;
    background-color: red;
  `,

  ModifyCardButton: styled.div`
    margin: 0px 4px;

    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: blue;
  `,
};
