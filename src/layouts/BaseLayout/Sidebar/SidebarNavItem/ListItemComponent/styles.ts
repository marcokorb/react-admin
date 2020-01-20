import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Theme } from 'src/config/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navItemCollapsedWrapper: {
      width: theme.sidebar.widthCollapsed,
    },
  })
);