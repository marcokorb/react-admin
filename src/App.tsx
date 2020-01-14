import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './config/theme';
import store from './store';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter  />
    </div>
  );
}

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
