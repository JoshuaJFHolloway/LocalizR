import styled from 'styled-components';

const NavButton = styled.button `
  height: 70px;
  width: 70px;
  margin: 10px;

  border: 5px inset grey;
  border-radius: 10px;

  display: inline-block;
  justify-content: space-evenly;
  transition: 0.5s;
  webkit-transition: 0.5s;

  &:hover {
    border: 5px double black;
  }
`;

export default NavButton;
