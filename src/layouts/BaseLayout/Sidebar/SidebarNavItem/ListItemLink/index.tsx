import React, { forwardRef } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';

export interface ListItemLinkProps extends NavLinkProps {}

const ListItemLink: React.ExoticComponent<NavLinkProps> = forwardRef(
  (props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
    <NavLink exact {...props} innerRef={ref} />
  ),
)

export default ListItemLink;
