import React from "react";
import ReactDOM from "react-dom/client";
import Hooks from "./root/card";
import { Containerr } from "./root/style";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Containerr>
    <Hooks />
    <Hooks />
    <Hooks />
  </Containerr>
);

export default Containerr;

