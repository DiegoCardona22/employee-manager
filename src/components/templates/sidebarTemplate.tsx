// @packages
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

// @scripts
import ResponsiveDrawer from '../molecules/sidebar';
import useBreakpoint from '../../hooks/useBreakpoint';

// @styles
import { EmployeeManagementTheme } from '../../styles/theme';
import classes from '../molecules/sidebar/index.module.scss';

interface SidebarTemplateProps {
  children: ReactNode;
}
const SidebarTemplate = ({ children }: SidebarTemplateProps) => {
  const theme = useTheme<EmployeeManagementTheme>();
  const breakpoint = useBreakpoint();

  return (
    <Box
      className={classes.sidebarTemplate}
      sx={{ background: theme.skin.backgroundMain }}
    >
      {breakpoint !== 'xs' && <ResponsiveDrawer />}
      <main>{children}</main>
    </Box>
  );
};
export default SidebarTemplate;
