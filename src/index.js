import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./index.css";
import GlobalStyles from "./globalStyles";

function App() {

  return (
      <>
        <GlobalStyles />
        <Shop />
      </>
  )
}

render(<App />, document.querySelector("#root"));
