// @packages
import { UseFormReturn } from 'react-hook-form';
import {
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { t } from 'i18next';

// @scripts
import TypographyAtm from '../../atoms/typography-atm';

// @styles
import styles from './index.module.scss';

interface AddOrEditEmployeeProps {
  dataTestId?: string;
  register: UseFormReturn['register'];
  errors: { [key: string]: { message: string } };
  watch: UseFormReturn['watch'];
}

const AddOrEditEmployee = ({
  register,
  errors = {},
}: AddOrEditEmployeeProps) => (
  <Grid container spacing={2} className={styles.formContainer}>
    <Grid item xs={12} sm={6} marginTop={2}>
      <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
        {t('text:employee')}
      </TypographyAtm>
      <Paper className={styles.section}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.firstName}
              fullWidth
              helperText={errors?.firstName?.message}
              inputProps={{ maxLength: 15 }}
              label="First Name"
              required
              {...register('firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Middle Name"
              required
              fullWidth
              error={!!errors?.middleName}
              helperText={errors?.middleName?.message}
              inputProps={{ maxLength: 15 }}
              {...register('middleName')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.lastName}
              fullWidth
              helperText={errors?.lastName?.message}
              inputProps={{ maxLength: 15 }}
              label="Last Name"
              required
              {...register('lastName')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.locationCity}
              fullWidth
              helperText={errors?.locationCity?.message}
              inputProps={{ maxLength: 20 }}
              label="Location City"
              required
              {...register('locationCity')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.address}
              fullWidth
              helperText={errors?.address?.message}
              inputProps={{ maxLength: 25 }}
              label="Address"
              required
              type="text"
              {...register('address')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Date of Birth"
              required
              type="date"
              fullWidth
              inputProps={{
                max: new Date().toISOString().split('T')[0],
              }}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors?.dateBirth}
              helperText={errors?.dateBirth?.message}
              {...register('dateBirth')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Telephone"
              required
              fullWidth
              type="number"
              inputProps={{ maxLength: 10 }}
              error={!!errors?.telephone}
              helperText={errors?.telephone?.message}
              {...register('telephone')}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} marginTop={2}>
      <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
        {t('text:position')}
      </TypographyAtm>
      <Paper className={styles.section}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.positionTitle}
              fullWidth
              helperText={errors?.positionTitle?.message}
              inputProps={{ maxLength: 15 }}
              label="Position Title"
              required
              type="text"
              {...register('positionTitle')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Hire Date"
              required
              type="date"
              inputProps={{
                max: new Date().toISOString().split('T')[0],
              }}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              error={!!errors?.hireDate}
              helperText={errors?.hireDate?.message}
              {...register('hireDate')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.email}
              fullWidth
              helperText={errors?.email?.message}
              inputProps={{ maxLength: 25 }}
              label="Email"
              required
              type="email"
              {...register('email')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.salary}
              fullWidth
              helperText={errors?.salary?.message}
              inputProps={{
                maxLength: 15,
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              InputProps={{
                inputMode: 'numeric',
                endAdornment: 'USD',
              }}
              label="Salary"
              required
              type="number"
              {...register('salary')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!!errors?.timeInPosition}
              fullWidth
              helperText={errors?.timeInPosition?.message}
              inputProps={{ maxLength: 15 }}
              label="Time in Position"
              required
              type="text"
              {...register('timeInPosition')}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default AddOrEditEmployee;
