import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, config } from "./router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { globalStyle } from "./components/style/global";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme(globalStyle);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {<App />}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
