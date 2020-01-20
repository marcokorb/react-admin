import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';

import ListItemLink from '../ListItemLink';

import { useStyles } from './styles';

export interface ListItemComponentProps extends HTMLAttributes<HTMLElement> {
  link?: string | null
  children?: any
  drawerOpened?: boolean | null
}

// Can be a link, or button
const ListItemComponent: React.ExoticComponent<
  ListItemComponentProps
> = forwardRef((props: ListItemComponentProps, ref: React.Ref<HTMLDivElement>) => {
  // Omit isCollapsed
  const { drawerOpened, ...newProps } = props
  const classes = useStyles()

  const component =
    typeof props.link === 'string' ? (
      <ListItem
        {...newProps}
        button
        component={ListItemLink}
        to={{
          pathname: props.link,
          state: {
            test: 3
          }
        }}
      />
    ) : (
      <ListItem {...newProps} button />
    )

  return (
    <div ref={ref} className={clsx(!drawerOpened && classes.navItemCollapsedWrapper)}>
      {component}
    </div>
  )
})

export default ListItemComponent;
