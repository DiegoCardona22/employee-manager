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
                <strong>Name:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {`${employeeDetails.firstName} ${employeeDetails.middleName} ${employeeDetails.lastName}`}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Location:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.locationCity}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Address:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.address}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Date of Birth:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.dateBirth}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Telephone:</strong>
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
                <strong>Title:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.positionTitle}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Hire Date:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.hireDate}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Email:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                {employeeDetails.email}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Salary:</strong>
              </TypographyAtm>
              <TypographyAtm className={styles.detailValue} variant="h3">
                $
                {employeeDetails.salary}
              </TypographyAtm>
            </div>
            <div className={styles.detailItem}>
              <TypographyAtm className={styles.detailTitle} variant="h3">
                <strong>Time in Position:</strong>
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
