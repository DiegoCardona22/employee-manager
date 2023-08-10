// @packages
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Icon from '@mui/material/Icon';
import { t } from 'i18next';
import { useTheme } from '@mui/material/styles';

// @scripts
import ActionButtonAtm from '../action-button-atm';
import TypographyAtm from '../typography-atm';

// @styles
import { EmployeeManagementTheme } from '../../../styles/theme';

// @types
export type PopupTypes = 'add' | 'confirm' | 'info' | 'delete' | 'update' | 'save' | 'custom';

interface IPopupAtm {
  autoBtnWidth?: boolean;
  children?: JSX.Element;
  className?: string;
  contentStyle?: Record<string, unknown>;
  customCancelLabel?: string;
  customConfirmLabel?: string;
  dataTestId?: string;
  height?: string
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  onCancel: () => void;
  onConfirm?: () => void;
  open: boolean;
  text?: string;
  title?: string;
  transitionDuration?: number;
  type?: PopupTypes;
  width?: string;
}

const PopupAtm = ({
  autoBtnWidth = false,
  children,
  className = '',
  contentStyle = {},
  customCancelLabel = '',
  customConfirmLabel = '',
  dataTestId = 'confirm-popup-atm',
  height = 'auto',
  maxWidth = 'sm',
  onCancel,
  onConfirm,
  open,
  text = '',
  title = t('text:confirmation'),
  transitionDuration = 250,
  type = 'confirm',
  width,
}: IPopupAtm) => {
  const theme = useTheme<EmployeeManagementTheme>();

  const cancelIcon = 'close';
  let cancelLabel = t('text:no');
  let confirmIcon = 'check';
  let confirmLabel = t('text:yes');

  switch (type) {
    case 'add':
      cancelLabel = t('text:cancel');
      confirmIcon = 'add';
      confirmLabel = t('text:add');
      break;
    case 'info':
      cancelLabel = t('text:close');
      break;
    case 'delete':
      cancelLabel = t('text:cancel');
      confirmIcon = 'save';
      confirmLabel = t('text:delete');
      break;
    case 'update':
      cancelLabel = t('text:cancel');
      confirmIcon = 'save';
      confirmLabel = t('text:update');
      break;
    case 'save':
      cancelLabel = t('text:cancel');
      confirmIcon = 'save';
      confirmLabel = t('text:save');
      break;
    case 'custom':
      cancelLabel = customCancelLabel;
      confirmLabel = customConfirmLabel;
      break;
    default:
      break;
  }

  return (
    <Dialog
      className={className}
      data-testid={dataTestId}
      maxWidth={maxWidth}
      open={open}
      transitionDuration={transitionDuration}
      PaperProps={{
        style: {
          backgroundColor: theme.skin?.backgroundSecond,
          height,
          minWidth: width,
          overflow: 'auto',
          padding: '20px 15px 0px 5px',
          width,
        },
      }}
    >
      <TypographyAtm
        dataTestId={`${dataTestId}-title`}
        fontWeight={600}
        variant="h2"
        muiProps={{ ml: '20px', mb: '10px', textTransform: 'capitalize' }}
      >
        {title}
      </TypographyAtm>
      <DialogContent sx={contentStyle}>
        {text && (
          <DialogContentText data-testid={`${dataTestId}-content`} color={theme.palette.grey[200]}>
            {text}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions>
        {onConfirm && (
          <ActionButtonAtm
            dataTestId={`${dataTestId}-confirm`}
            label={confirmLabel}
            onClick={onConfirm}
            muiProps={{
              color: 'success',
              size: 'small',
              startIcon: <Icon data-testid={`${dataTestId}-confirm-starticon`}>{confirmIcon}</Icon>,
              sx: { marginRight: '10px', width: `${autoBtnWidth && 'auto'}` },
              variant: 'contained',
            }}
          />
        )}
        <ActionButtonAtm
          dataTestId={`${dataTestId}-cancel`}
          label={cancelLabel}
          onClick={onCancel}
          muiProps={{
            color: 'error',
            size: 'small',
            startIcon: <Icon data-testid={`${dataTestId}-cancel-starticon`}>{cancelIcon}</Icon>,
            sx: { marginRight: '10px' },
            variant: 'contained',
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default PopupAtm;
