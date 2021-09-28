import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "../public/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#050f15",
      },
      secondary: {
        main: "#fafafa",
      },
    },
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const turnDarkModeOff = () => {
    setDarkState(false);
  };

  const turnDarkModeOn = () => {
    setDarkState(true);
  };

  // Move back when not in development: <link rel="stylesheet" href="/style.css" />
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
