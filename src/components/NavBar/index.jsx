import React, { useContext } from "react";
import { NavBarStyle } from "./styles";
import NavControl from "../NavControl";
import { TodoContext } from "../../context";

const NavBar = () => {
  const { getTodoValues } = useContext(TodoContext);
  return (
    <NavBarStyle>
      <NavControl namePage={"Index"} />
      <NavControl namePage={"Dash"} />
      <NavControl namePage={"Home"} />
    </NavBarStyle>
  );
};

export default NavBar;
