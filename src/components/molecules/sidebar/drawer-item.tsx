// @packages
import Icon from '@mui/material/Icon';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

// @styles
import { EmployeeManagementTheme } from '../../../styles/theme';

interface IDrawerItem {
  child?: boolean;
  hasChildren?: boolean;
  icon?: string;
  onClick?: () => void;
  selected?: boolean;
  text: string;
}

const DrawerItem = ({
  child = false,
  hasChildren = false,
  icon,
  onClick = () => {},
  selected,
  text,
}: IDrawerItem) => {
  const theme = useTheme<EmployeeManagementTheme>();
  const { isSidebarOpen } = useSelector((state: any) => state.globalUiReducer);
  const getIcon = () => (icon ? <Icon>{icon}</Icon> : null);

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'block',
        paddingY: 0.5,
        marginLeft: child ? 1.5 : 0,
        paddingLeft: child ? 1 : 0,
      }}
    >
      <ListItemButton
        sx={{
          ml: child ? 0.7 : 0,
          minHeight: 48,
          justifyContent: isSidebarOpen ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={onClick}
      >
        <Tooltip title={isSidebarOpen ? '' : text}>
          <ListItemIcon
            sx={{
              color: selected && child ? theme.palette.primary.main : theme.palette.common.white,
              minWidth: 0,
              mr: isSidebarOpen ? 2 : 'auto',
              justifyContent: 'flex-start',
              visibility: icon ? 'visible' : 'hidden',
            }}
          >
            {getIcon()}
          </ListItemIcon>
        </Tooltip>
        <ListItemText
          primary={text}
          sx={{
            opacity: isSidebarOpen ? 1 : 0,
            color: selected && child ? theme.palette.primary.main : theme.palette.common.white,
            whiteSpace: 'pre-line',
          }}
        />
        {
          hasChildren && (
            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
              {selected ? <KeyboardArrowUpIcon /> : <KeyboardArrowRightIcon />}
            </ListItemIcon>
          )
        }
      </ListItemButton>
    </ListItem>
  );
};
export default DrawerItem;
