import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";

//comment for step 3.5 in the second part of GitHub Action Workshop 
const Global = createGlobalStyle`
  body {
    background-image: url("gsfc_20171208_archive_e000226_orig-2.jpg");
  }
`;

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
