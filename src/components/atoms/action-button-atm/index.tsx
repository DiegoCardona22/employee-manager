// @packages
import Button, { ButtonProps } from '@mui/material/Button';
import ToolTip from '@mui/material/Tooltip';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { ReactNode, ReactElement, SyntheticEvent } from 'react';
import { useTheme } from '@mui/material/styles';

// @styles
import { EmployeeManagementTheme } from '../../../styles/theme';

interface IActionButtonAtmProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  dataTestId?: string;
  disableElevation?: boolean;
  disabled?: boolean;
  endIcon?: ReactNode
  href?: string;
  icon?: ReactElement,
  label?: string;
  muiProps?: ButtonProps;
  muiPropsText?: TypographyProps;
  onClick?: ((event: SyntheticEvent) => void);
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode,
  textClassName?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined' | 'text';
}

const ActionButtonAtm = ({
  className = '',
  color = 'primary',
  dataTestId = 'action-button',
  disableElevation = false,
  disabled = false,
  endIcon,
  href = '',
  icon,
  label = '',
  muiProps = {},
  muiPropsText = {},
  onClick = () => {},
  size = 'medium',
  startIcon,
  textClassName = '',
  type = 'button',
  variant = 'contained',
}: IActionButtonAtmProps) => {
  const theme = useTheme<EmployeeManagementTheme>();

  return (
    <Button
      className={className}
      color={color}
      data-testid={dataTestId}
      disableElevation={disableElevation}
      disabled={disabled}
      endIcon={endIcon}
      href={href}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      type={type}
      variant={variant}
      {...muiProps}
    >
      {!icon && label
        && (
        <Typography
          data-testid={`${dataTestId}-label`}
          color={(variant === 'text' && theme.colors.blueRibbon)
            || (disabled && theme.colors.casper) || ''}
          variant="button"
          className={textClassName}
          {...muiPropsText}
        >
          {label}
        </Typography>
        )}
      {icon && <ToolTip data-testid={`${dataTestId}-tooltipicon`} title={label}>{icon}</ToolTip>}
    </Button>
  );
};

export default ActionButtonAtm;
