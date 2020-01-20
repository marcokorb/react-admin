import React, { ReactNode } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Theme } from '../../config/theme';

interface PageContainerProps {
  children?: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {children}
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default PageContainer;
