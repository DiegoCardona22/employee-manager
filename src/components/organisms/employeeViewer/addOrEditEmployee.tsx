// @packages
import { UseFormReturn } from 'react-hook-form';
import {
  Container,
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
  <Container>
    <Grid container spacing={2} className={styles.formContainer}>
      <Grid item xs={12} sm={6}>
        <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
          {t('text:employee')}
        </TypographyAtm>
        <Paper className={styles.section}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12}>
              <TextField
                error={!!errors?.firstName}
                fullWidth
                helperText={errors?.firstName?.message}
                inputProps={{ maxLength: 20 }}
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
                inputProps={{ maxLength: 20 }}
                {...register('middleName')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                error={!!errors?.lastName}
                fullWidth
                helperText={errors?.lastName?.message}
                inputProps={{ maxLength: 20 }}
                label="Last Name"
                required
                {...register('lastName')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Location City"
                required
                fullWidth
                error={!!errors?.locationCity}
                helperText={errors?.locationCity?.message}
                {...register('locationCity')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Address"
                required
                type="text"
                fullWidth
                error={!!errors?.address}
                helperText={errors?.address?.message}
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
                error={!!errors?.telephone}
                helperText={errors?.telephone?.message}
                {...register('telephone')}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
          {t('text:position')}
        </TypographyAtm>
        <Paper className={styles.section}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Position Title"
                required
                type="text"
                fullWidth
                error={!!errors?.positionTitle}
                helperText={errors?.positionTitle?.message}
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
                label="Email"
                required
                type="email"
                fullWidth
                error={!!errors?.email}
                helperText={errors?.email?.message}
                {...register('email')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Salary"
                required
                fullWidth
                type="number"
                error={!!errors?.salary}
                helperText={errors?.salary?.message}
                {...register('salary')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Time in Position"
                required
                fullWidth
                type="text"
                error={!!errors?.timeInPosition}
                helperText={errors?.timeInPosition?.message}
                {...register('timeInPosition')}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default AddOrEditEmployee;
