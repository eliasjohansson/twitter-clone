import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: block;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  border: 1px solid #1da1f2;
  background-color: ${props => (props.outlined ? '#fff' : '#1da1f2')};
  color: ${props => (props.outlined ? '#1da1f2' : '#fff')};
  color: #fff;
  line-height: 20px;
  outline: 0;
  opacity: ${props => (props.disabled ? '.3' : '1')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${props => (props.outlined ? '#eaf5fd' : '#006dbf')};
    border: 1px solid #006dbf;

    ${props =>
    props.hover && {
      backgroundColor: props.hover.color,
      border: `1px solid ${ props.hover.color}`,
    }};
  }

  &:active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #1da1f2;
  }
`;

export const ButtonLink = Button.withComponent(NavLink).extend`
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
