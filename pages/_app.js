import React from "react";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </React.StrictMode>
  );
}

export default MyApp;
