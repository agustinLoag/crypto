import React from "react";
import styled from "styled-components";
import { PublicLayout } from "./layout/PublicLayout";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <PublicLayout>Hola desde Crypto</PublicLayout>
    </>
  );
}

export default App;
