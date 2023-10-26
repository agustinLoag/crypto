import React, { useContext } from "react";
import { NavControlContainer } from "./styles";
import { TodoContext } from "../../context";

const NavControl = ({ namePage }) => {
  const { currentPage, handlePage } = useContext(TodoContext);
  return (
    <NavControlContainer
      onClick={() => handlePage(namePage)}
      active={currentPage === namePage}
    >
      {namePage}
    </NavControlContainer>
  );
};

export default NavControl;
