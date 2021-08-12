import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      },
      '.App': {
        fontFamily: "sans-serif",
        textAlign: "center",
        backgroundImage: "url('./img/ZzNevd.jpg')",
        backgroundSize:"auto",
        padding:'8px',
      },
      ".widget": {
        margin: "8px 0"
      },
      
      
      ".MuiPaper-root": {
        backgroundColor: "rgba(255,255,255,.4) !important",
        backdropFilter: "blur(5px)"
      }
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};
const theme = createTheme({
  });

render(
    <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));
