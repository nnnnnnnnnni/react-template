import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "./router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { globalStyle } from "./components/style/global";

const theme = extendTheme(globalStyle)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
