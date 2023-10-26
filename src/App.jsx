import React from "react";
import styled from "styled-components";
import { PublicLayout } from "./layout/PublicLayout";
import { GlobalStyle } from "./globalStyle";
import { FinalTodo } from "./context";

function App() {
  return (
    <FinalTodo>
      <GlobalStyle />
      <PublicLayout>Hola desde Crypto</PublicLayout>
    </FinalTodo>
  );
}

export default App;
