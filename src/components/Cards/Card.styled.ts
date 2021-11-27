import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 95%;
  height: 100px;
  margin: 0 auto;
  max-height: 300px;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px gray;
`;

const CardTop = styled.div`
  height: 20px;
  border: 1px solid black;
  background-color: gray;
`;

export default { CardWrapper, CardTop };
