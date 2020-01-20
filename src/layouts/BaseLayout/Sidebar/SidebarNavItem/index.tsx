import React, { useMemo } from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconSpacer from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import ListItemComponent from './ListItemComponent';
import { useStyles } from './styles';

// Flattened array of all children
function getItemsAll(items: SidebarNavItemProps[]): SidebarNavItemProps[] {
  return items.reduce((allItems: SidebarNavItemProps[], item: SidebarNavItemProps) => {

    if (item.items && item.items.length) {
      return allItems.concat([item], getItemsAll(item.items));
    } else {
      return allItems.concat([item]);
    }
  }, []);
}

export interface SidebarNavItemProps {
  name: string
  link?: string
  Icon?: React.ComponentType<SvgIconProps>
  IconStyles?: React.CSSProperties
  IconClassName?: string
  IconClassNameActive?: string
  drawerOpened?: boolean
  isOpen?: boolean
  isNested?: boolean
  nestingLevel?: number
  nestingOffset?: number
  className?: string
  items?: SidebarNavItemProps[]
  match?: object
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = (props: SidebarNavItemProps) => {
  const {
    name,
    link,
    Icon,
    IconStyles = {},
    IconClassName = '',
    drawerOpened,
    nestingLevel = 0,
    nestingOffset = 16,
    className,
    items = [],
  } = props;

  const isTooltipEnabled = !drawerOpened;
  const classes = useStyles();
  const hasChildren = items && items.length > 0;

  const itemsAll = useMemo(() => getItemsAll(items), [items]);
  const hasChildrenAndIsActive =
    hasChildren &&
    itemsAll.filter(item => `#${item.link}` === window.location.hash).length > 0;
  const isOpen = hasChildrenAndIsActive || false;
  const [open, setOpen] = React.useState(isOpen);

  function handleClick() {
    setOpen(!open)
  }

  const ListItemIconInner =
    (!!Icon && <Icon />) ||
    (!drawerOpened && <IconSpacer className={classes.iconSpacer} />) ||
    '';

  const nestingOffsetChildren = drawerOpened ? nestingOffset + 16 : 16;

  const ListItemElement = (
    <ListItemComponent
      link={link}
      className={clsx(
        classes.navItem,
        !drawerOpened && classes.navItemCollapsed,
        hasChildrenAndIsActive && 'active',
        className,
      )}
      style={{
        fontSize: `${1 - 0.07 * nestingLevel}em`,
        paddingLeft: `${!ListItemIconInner ? nestingOffset + 40 : nestingOffset}px`,
      }}
      drawerOpened={drawerOpened}
      onClick={handleClick}
    >
      {!!ListItemIconInner && (
        <ListItemIcon
          style={IconStyles}
          className={clsx(classes.navItemIcon, IconClassName)}
        >
          {ListItemIconInner}
        </ListItemIcon>
      )}
      <ListItemText primary={name} disableTypography={true} />
      {hasChildren && !open && <IconExpandMore className={classes.iconToggle} />}
      {hasChildren && open && <IconExpandLess className={classes.iconToggle} />}
    </ListItemComponent>
  )

  const ListItemRoot = isTooltipEnabled ? (
    <Tooltip
      disableFocusListener={!isTooltipEnabled}
      disableHoverListener={!isTooltipEnabled}
      disableTouchListener={!isTooltipEnabled}
      title={name}
      placement="right"
    >
      {ListItemElement}
    </Tooltip>
  ) : (
    ListItemElement
  )

  const ListItemChildren = hasChildren ? (
    <div className={clsx(classes.navItemChildren)}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <Divider /> */}
        <List component="div" disablePadding>
          {items.map(item => (
            <SidebarNavItem
              {...item}
              isNested={true}
              nestingLevel={nestingLevel + 1}
              drawerOpened={drawerOpened}
              key={item.name || item.link}
              isOpen={open}
              nestingOffset={nestingOffsetChildren}
            />
          ))}
        </List>
      </Collapse>
    </div>
  ) : null

  return (
    <div
      className={clsx(
        hasChildrenAndIsActive && classes.navItemWrapperActive,
        hasChildrenAndIsActive && !drawerOpened && classes.navItemWrapperActiveCollapsed,
      )}
    >
      {ListItemRoot}
      {ListItemChildren}
    </div>
  )
}

export default SidebarNavItem;
