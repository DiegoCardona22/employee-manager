// @packages
import Typography, { TypographyProps } from '@mui/material/Typography';
import classNames from 'classnames';
import { ReactNode } from 'react';

// @styles
import classes from './index.module.scss';

// @types
import {
  ITypographyFontWeight,
  ITypographyVariant,
} from '../../../types/utils';

interface ITypographyAtmProps {
  children: ReactNode;
  className?: string;
  dataTestId?: string;
  fontWeight?: ITypographyFontWeight;
  muiProps?: TypographyProps;
  variant: ITypographyVariant;
}

const TypographyAtm = ({
  children,
  className = '',
  dataTestId = 'typography',
  fontWeight = 400,
  muiProps = {},
  variant,
}: ITypographyAtmProps) => (
  <Typography
    className={classNames(classes[`font-family-${fontWeight}`], className)}
    component="span"
    data-testid={dataTestId}
    fontWeight={fontWeight}
    variant={variant}
    {...muiProps}
  >
    {children}
  </Typography>
);

export default TypographyAtm;
