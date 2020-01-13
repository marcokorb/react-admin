import React from 'react';

import { useStyles } from './styles';

const Main: React.FC = ({ children }) => {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.headerSpacer} />
      {children}
    </main>
  );
};

export default Main;