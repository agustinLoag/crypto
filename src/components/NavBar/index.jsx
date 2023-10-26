import React from "react";
import { NavBarStyle } from "./styles";
import NavControl from "../NavControl";

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavControl>Hola 1</NavControl>
      <NavControl>Hola 2</NavControl>
      <NavControl>Hola 3</NavControl>
    </NavBarStyle>
  );
};

export default NavBar;
