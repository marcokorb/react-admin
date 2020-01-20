import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const PageBreadcrumbs: React.FC = () => {

  const location = useLocation();

  console.log(location);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/">
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}

export default PageBreadcrumbs;
