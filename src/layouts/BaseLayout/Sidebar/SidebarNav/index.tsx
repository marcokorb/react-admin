import React from 'react';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconProducts from '@material-ui/icons/LocalMall';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import SidebarNavItems from '../SidebarNavItems';

import { useStyles } from './styles';

type OwnProps = {
  drawerOpened: boolean;
}

const SidebarNav: React.FC<OwnProps> = ({ drawerOpened }: OwnProps) => {

  const classes = useStyles();

  const itemsSales = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      Icon: IconDashboard,
    },
    {
      name: 'Produtos',
      Icon: IconProducts,
      items: [
        {
          name: 'Listagem de Produtos',
          link: '/produtos/listagem',
        },
      ]
    }
  ];

  return (
    <div className="sidebarnav">
      <List className={classes.navList} disablePadding>
        {drawerOpened && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Applications
          </ListSubheader>
        )}
        <SidebarNavItems
          items={itemsSales}
          drawerOpened={drawerOpened}
        />
      </List>     
    </div>
  );
}

export default SidebarNav;
