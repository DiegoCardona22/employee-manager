// @packages
import { useEffect, useState } from 'react';
import {
  Container, Grid, Paper, Divider, Avatar,
} from '@mui/material';
import { t } from 'i18next';

// @scripts
import TypographyAtm from '../../atoms/typography-atm';
import employeeDetail from '../../../config/master-data/employeeDetail.json';

// @types
import { IEmployees, IEmployeesDetails } from '../../../types/utils';

// @styles
import styles from './index.module.scss';

interface ISeeEmployeeDetailsProps {
  employee: IEmployees;
}

const SeeEmployeeDetails = ({ employee }: ISeeEmployeeDetailsProps) => {
  const [employeeDetails, setEmployeeDetails] = useState<IEmployeesDetails>({} as IEmployeesDetails);

  useEffect(() => {
    const employeeDetailsData = employeeDetail.find((item: any) => item.id === employee.id);
    setEmployeeDetails(employeeDetailsData ?? {} as IEmployeesDetails);
  }, [employee]);

  return (
    <Container>
      <Avatar className={styles.avatar} color="primary">
        {employee.firstName && employee.firstName[0]}
        {employee.lastName && employee.lastName[0]}
      </Avatar>
      <Grid container spacing={2} className={styles.detailsContainer}>
        <Grid item xs={12} sm={6}>
          <Paper className={styles.section}>
            <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
              {t('text:employee')}
            </TypographyAtm>
            <Divider sx={{ mb: 2 }} />
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:name')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {`${employeeDetails.firstName} ${employeeDetails.middleName} ${employeeDetails.lastName}`}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:location')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.locationCity}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:address')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.address}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:dateOfBirth')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.dateBirth}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:telephone')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.telephone}
              </TypographyAtm>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={styles.section}>
            <TypographyAtm variant="h3" muiProps={{ color: 'primary' }}>
              {t('text:position')}
            </TypographyAtm>
            <Divider sx={{ mb: 2 }} />
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:title')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.positionTitle}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:hireDate')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.hireDate}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:email')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.email}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:salary')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                $
                {employeeDetails.salary}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>
                  {t('text:timeInPosition')}
                </strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.timeInPosition}
              </TypographyAtm>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SeeEmployeeDetails;
