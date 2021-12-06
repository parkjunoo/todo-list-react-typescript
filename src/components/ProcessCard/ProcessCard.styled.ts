import styled from 'styled-components';

export default {
  ProcessCardWrapper: styled.div`
    display: inline-block;
    margin: 1.6%;
    width: 30%;
    background-color: #00000015;
    border-radius: 4px;
  `,

  ProcessCardBottom: styled.div`
    display: inline-block;
    font-size: 20px;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    text-align: center;
    border-radius: 0 0 4px 4px;
  `,

  ProcessCardTop: styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    font-size: 20px;
    border-radius: 4px 4px 0 0;
  `,

  ProcessCardOptionButton: styled.div`
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: green;
    font-size: 20px;
    right: 0;
    bottom: calc(50% - 12px);
    margin-right: 5px;
  `,
};
