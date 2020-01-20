import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from 'src/config/theme';

// Todo: Verify the use of createStyles
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      // background: '#fff',
      // color: '#7b7b7b',
      boxShadow: 'none',
    },
    toolbar: {},
    menuButton: {},
    actions: {
      marginLeft: 'auto',
      alignItems: 'center',
      display: 'flex',
    },
    notificationsButton: {
      marginRight: 23,
    },
    title: {
      flexGrow: 1,
    }
  })
);
