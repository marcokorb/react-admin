import React from 'react';

import SidebarNavItem, { SidebarNavItemProps } from '../SidebarNavItem';

export type SidebarNavItemsProps = {
  items: SidebarNavItemProps[];
  isNested?: boolean;
  drawerOpened?: boolean;
}

const SidebarNavItems: React.FC<SidebarNavItemsProps> = (props: SidebarNavItemsProps) => {

  const { items = [], drawerOpened, isNested = false } = props;

  return (
    <>
      {items.map((item, index) => (
        <SidebarNavItem
          {...item}
          drawerOpened={drawerOpened}
          isNested={isNested}
          key={index}
        />
      ))}
    </>
  )
}

export default SidebarNavItems;
