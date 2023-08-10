// @packages
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

// @scripts
import ResponsiveDrawer from '../molecules/sidebar';
import classes from '../molecules/sidebar/index.module.scss';

// @styles
import { EmployeeManagementTheme } from '../../styles/theme';

interface SidebarTemplateProps {
  children: ReactNode;
}
const SidebarTemplate = ({ children }: SidebarTemplateProps) => {
  const theme = useTheme<EmployeeManagementTheme>();

  return (
    <Box
      className={classes.sidebarTemplate}
      sx={{ background: theme.skin.backgroundMain }}
    >
      <ResponsiveDrawer />
      <main>{children}</main>
    </Box>
  );
};
export default SidebarTemplate;
