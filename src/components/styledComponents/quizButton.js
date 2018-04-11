import styled from 'styled-components';

const QuizButton = styled.button `
  opacity: 0.8;
  font-size: 15px;
  font-weight: 600;
  border: 7px inset grey;
  border-radius: 10px;
  transition: 0.5s;
  webkit-transition: 0.5s;

  &:hover {
    border: 7px double white;
  }
`;

export default QuizButton;

// display: inline;
// vertical-align: top;
// justify-content: space-evenly;
// margin: 10px;
