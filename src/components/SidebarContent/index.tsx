import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import Logo from '../../common/Logo';

import SidebarNav from '../SidebarNav';

import { useStyles } from './styles';

const SidebarContent: React.FC = () => {

  const classes = useStyles();

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Link to="/" className={classes.sidebarTitleLink}>
          <Logo size={30} className={classes.logo} />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <span className={classes.name}>Material Admin</span>
            <span className={classes.tagline}>ReactJS + MaterialUI</span>
          </Typography>
        </Link>
        <SidebarNav />
      </div>
    </aside>
  )
}

export default SidebarContent;
