// @packages
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import classNames from 'classnames';
import { Fragment, useState } from 'react';
import { styled, CSSObject } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

// @scripts
import DrawerItem from './drawer-item';
import { SidebarOptions } from '../../../config/master-data/sidebar-options';
import {
  closeSidebar,
  openSidebar,
} from '../../../redux/slices/globalUi';

// @types
import { RootState } from '../../../redux/store';

// @styles
import classes from './index.module.scss';
import { EmployeeManagementTheme } from '../../../styles/theme';

const openedMixin = (theme: EmployeeManagementTheme): CSSObject => ({
  backgroundColor: theme.skin.backgroundSidebar,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  width: classes.sidebarwidth,
});

const closedMixin = (theme: EmployeeManagementTheme): CSSObject => ({
  backgroundColor: theme.skin.backgroundSidebar,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: classes.sidebarwidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme as EmployeeManagementTheme),
    '& .MuiDrawer-paper': openedMixin(theme as EmployeeManagementTheme),
  }),
  ...(!open && {
    ...closedMixin(theme as EmployeeManagementTheme),
    '& .MuiDrawer-paper': closedMixin(theme as EmployeeManagementTheme),
  }),
}));

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState(new Array(SidebarOptions.length).fill(false));
  const { isSidebarOpen } = useSelector((state: RootState) => state.globalUiReducer);

  const dispatch = useDispatch();
  const handleDrawerOpen = () => dispatch(openSidebar());
  const handleDrawerClose = () => dispatch(closeSidebar());

  const handleClickMenuCategory = (menuIndex: number) => {
    if (!isSidebarOpen) {
      handleDrawerOpen();
    } else {
      const prevState = expandedMenus[menuIndex];
      const newState = Array.from(
        { length: expandedMenus.length },
        (_, index) => ((index === menuIndex) ? !prevState : false),
      );
      setExpandedMenus(newState);
    }
  };

  return (
    <Box
      sx={{ display: 'flex' }}
      data-testid="sidebar"
      className={classes.sidebar}
    >
      <Drawer variant="permanent" open={isSidebarOpen}>
        {isSidebarOpen ? (
          <Box className={classes.arrowButton}>
            <IconButton
              onClick={isSidebarOpen ? handleDrawerClose : handleDrawerOpen}
              size="small"
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </Box>
        ) : (
          <Box className={classes.arrowButton} sx={{ left: '50px' }}>
            <IconButton
              onClick={isSidebarOpen ? handleDrawerClose : handleDrawerOpen}
              size="small"
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Box>
        )}
        <List
          sx={isSidebarOpen ? { left: 0 } : { left: '30px' }}
          className={
            classNames(isSidebarOpen ? classes.sidebarMenuList : '', classes.scrollbarPrimary)
          }
        >
          {SidebarOptions.map(({
            id,
            icon,
            text,
            children,
            showIconInSidebar,
          }, index) => (!!children.length
            && (
              <Fragment key={id}>
                <DrawerItem
                  hasChildren={Boolean(children)}
                  icon={showIconInSidebar ? icon : ''}
                  onClick={() => handleClickMenuCategory(index)}
                  selected={expandedMenus[index]}
                  text={text}
                />
                <Collapse
                  in={expandedMenus[index] && isSidebarOpen}
                  mountOnEnter
                  unmountOnExit
                >
                  <Box>
                    {children
                      .map(({
                        icon: childIcon,
                        idItem,
                        showIconInSidebar: showIconInSidebarChild,
                        textItem,
                      }) => (
                        <DrawerItem
                          child
                          icon={showIconInSidebarChild ? childIcon : ''}
                          key={idItem}
                          selected
                          text={textItem}
                        />
                      ))}
                  </Box>
                </Collapse>
              </Fragment>
            )))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
