import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
      primary: {
          main: '#3F8AE0'
      },
      secondary: {
          main: '#326eb3'
      },
      background: {
        default: '#00324e',
      },
  },
  text: {
      main: '#172B4D',
      light: '#262930'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
