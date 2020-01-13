import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './config/theme';
import store from './store';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
