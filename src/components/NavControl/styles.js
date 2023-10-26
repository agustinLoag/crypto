import styled, { css } from "styled-components";

export const NavControlContainer = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blueviolet;
    `}
`;
