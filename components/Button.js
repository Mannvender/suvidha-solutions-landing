import styled, { css } from "styled-components";

export const buttonCss = css`
  border: none;
  font-weight: 700;
  color: ${(props) => props.theme.colors.light};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.light};
  border-radius: 0px;
  max-width: 200px;
  min-width: 200px;
  font-size: 1rem;
  padding: 1rem 0rem;
  pointer-events: auto;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.theme.colors.light};
      color: ${props.theme.colors.dark};
      padding: 1rem;
    `}
`;
const StyledButton = styled.button`
  ${buttonCss}
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
`;

export default StyledButton;
