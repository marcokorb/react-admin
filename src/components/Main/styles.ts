import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Theme } from '../../config/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      flexDirection: 'column',
      display: 'flex',
    },
    fixedHeight: {
      height: 240,
    },
    headerSpacer: theme.mixins.toolbar,
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  })
);
