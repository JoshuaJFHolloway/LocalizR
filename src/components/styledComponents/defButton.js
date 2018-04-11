import styled from 'styled-components';

const DefButton = styled.button `
  opacity: 0.8;
  font-size: 15px;
  display: inline;
  vertical-align: top;
  justify-content: space-evenly;
  margin: 10px;
  border: 7px double LightSkyBlue;
  border-radius: 20px;
  transition: 0.5s;
  webkit-transition: 0.5s;

  &:hover {
    border: 7px double white;
  }
`;

export default DefButton;
