import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from './config/theme';
import Routes from './Routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#f5f5f5',
    }
  })
);

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
