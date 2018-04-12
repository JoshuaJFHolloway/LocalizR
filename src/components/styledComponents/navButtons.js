import styled from 'styled-components';

const NavButton = styled.button `
  background-color: rgba(0, 0, 0, 0.1);
  color: #000000;
  margin: 10px;
  width: 70px;
  height: 70px;
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
//
// // display: inline;
// // vertical-align: top;
// // justify-content: space-evenly;
// // margin: 10px;
//
// // font-size: 15px;
// // font-weight: 600;
// // border: 5px inset grey;
// // border-radius: 10px;
// // margin-bottom: 20px;
// //
// // &:hover {
// //   border: 10px double white;
// // }
