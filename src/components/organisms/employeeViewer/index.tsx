// @packages
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import SearchIcon from '@mui/icons-material/Search';
import { UseFormReturn, useForm } from 'react-hook-form';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';

// @scripts
import ActionButtonAtm from '../../atoms/action-button-atm';
import AddOrEditEmployee from './addOrEditEmployee';
import EmployeesService from '../../../services/EmployeesService';
import PopupAtm from '../../atoms/popup-atm';
import SeeEmployeeDetails from './seeEmployeeDetails';
import TypographyAtm from '../../atoms/typography-atm';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { defaultValues, schema } from './schema';

// @types
import { IEmployees, IEmployeesDetails } from '../../../types/utils';

// @styles
import styles from './index.module.scss';

interface EmployeeViewerProps {
  dataTestId?: string;
}

const EmployeeViewer: React.FC = ({ dataTestId = 'employee-viewer' }: EmployeeViewerProps) => {
  const [employeeList, setEmployeeList] = useState<IEmployees[]>([]);
  const [employeeDetail, setEmployeeDetail] = useState<IEmployeesDetails[]>([]);
  const [employeeSelected, setEmployeeSelected] = useState<IEmployees>({} as IEmployees);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [addOrEditEmployee, setAddOrEditEmployee] = useState({
    isEditing: false,
    open: false,
    type: '',
  });

  const breakpoint = useBreakpoint();
  const modalBreakpoint = breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg';

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<IEmployees>({
    mode: 'onSubmit',
    resolver: yupResolver(schema) as never,
    defaultValues,
  });

  const handleNewEmployee = () => {
    setAddOrEditEmployee({ isEditing: false, open: true, type: 'add' });

    reset({
      ...defaultValues,
    });
  };

  const handleEditEmployee = (employee: IEmployees) => {
    setAddOrEditEmployee({ isEditing: true, open: true, type: 'edit' });

    const employeeDetails = employeeDetail.find((detail) => detail.id === employee.id);

    reset({
      ...employeeDetails,
      ...employee,
    });
  };

  const handleDeleteEmployee = (employee: IEmployees) => {
    setShowDeleteModal(true);
    setEmployeeSelected(employee);
  };

  const handleEmployeeDetail = (employee: IEmployees) => {
    setShowDetailModal(true);
    setEmployeeSelected(employee);
  };

  const handleAddEmployee = (data: IEmployees) => {
    const newData = {
      ...data,
      id: uuidV4(),
      status: 'Active',
      dateArrival: new Date().toISOString().split('T')[0],
    };

    setEmployeeList([
      ...employeeList,
      newData,
    ].sort((a: IEmployees, b: IEmployees) => a.firstName.localeCompare(b.firstName)));
    setAddOrEditEmployee({ isEditing: false, open: false, type: '' });
  };

  const handleUpdateEmployee = (data: IEmployees) => {
    const newData = {
      ...data,
    };

    const newEmployeeList = employeeList.map((employee) => {
      if (employee.id === newData.id) {
        return newData;
      }

      return employee;
    });

    setEmployeeList(newEmployeeList.sort((a: IEmployees, b: IEmployees) => a.firstName.localeCompare(b.firstName)));
    setAddOrEditEmployee({ isEditing: false, open: false, type: '' });
  };

  const getEmployees = async () => {
    const employeesData = await EmployeesService.getEmployees();

    setEmployeeList(employeesData.sort((a: IEmployees, b: IEmployees) => a.firstName.localeCompare(b.firstName)));
  };

  const getEmployeeDetails = async () => {
    const employeesDetailsData = await EmployeesService.getEmployeeDetails();

    setEmployeeDetail(employeesDetailsData);
  };

  useEffect(() => {
    getEmployees();
    getEmployeeDetails();
  }, []);

  return (
    <Box className={styles.root}>
      <TypographyAtm
        variant="h1"
        fontWeight={600}
        muiProps={{
          color: 'primary',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {t('text:employeesViewer')}
      </TypographyAtm>
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-end"
        spacing={2}
      >
        <Grid item>
          <ActionButtonAtm
            dataTestId={`${dataTestId}-add`}
            muiProps={{
              color: 'success',
              startIcon: <AddIcon data-testid={`${dataTestId}-add-starticon`} />,
              variant: 'contained',
              size: 'small',
            }}
            label={t('text:new')}
            onClick={handleNewEmployee}
          />
        </Grid>
        <Grid item>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className={styles.downloadButton}
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table id="table-to-xls" aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ width: '10%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:actions')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:firstName')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:lastName')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:positionTitle')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:dateArrival')}
              </TableCell>
              <TableCell sx={{ width: '10%', fontWeight: 'bold', fontSize: '1rem' }}>
                {t('text:status')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className={styles.actions}>
                  <Tooltip title="See Detail">
                    <IconButton onClick={() => handleEmployeeDetail(employee)}>
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEditEmployee(employee)}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteEmployee(employee)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell className={styles.tableCell}>{employee.firstName}</TableCell>
                <TableCell className={styles.tableCell}>{employee.lastName}</TableCell>
                <TableCell className={styles.tableCell}>{employee.positionTitle}</TableCell>
                <TableCell className={styles.tableCell}>{employee.dateArrival}</TableCell>
                <TableCell className={styles.tableCell}>{employee.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {addOrEditEmployee.open && (
        <PopupAtm
          width={modalBreakpoint ? 'auto' : '1200px'}
          height={modalBreakpoint ? 'auto' : '800px'}
          open={addOrEditEmployee.open}
          title={addOrEditEmployee.isEditing ? 'Edit Employee' : 'Add Employee'}
          onCancel={() => setAddOrEditEmployee({ isEditing: false, open: false, type: '' })}
          onConfirm={
          addOrEditEmployee.isEditing
            ? handleSubmit(handleUpdateEmployee as any)
            : handleSubmit(handleAddEmployee as any)
        }
          type={addOrEditEmployee.isEditing ? 'update' : 'add'}
        >
          <AddOrEditEmployee
            errors={errors as unknown as { [key: string]: { message: string } }}
            register={register as unknown as UseFormReturn['register']}
            watch={watch as unknown as UseFormReturn['watch']}
          />
        </PopupAtm>
      )}
      {showDeleteModal && (
        <PopupAtm
          width={modalBreakpoint ? 'auto' : '500px'}
          height={modalBreakpoint ? 'auto' : '200px'}
          open={showDeleteModal}
          title={`Delete ${employeeSelected.firstName} ${employeeSelected.lastName}`}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            setEmployeeList(
              employeeList.filter((employee) => employee.id !== employeeSelected.id)
                .sort((a: IEmployees, b: IEmployees) => a.firstName.localeCompare(b.firstName)),
            );
            setShowDeleteModal(false);
          }}
          type="delete"
        >
          <TypographyAtm variant="h3">
            {t('text:deleteEmployeeMessage')}
          </TypographyAtm>
        </PopupAtm>
      )}
      {showDetailModal && (
        <PopupAtm
          width={modalBreakpoint ? 'auto' : '1200px'}
          height={modalBreakpoint ? 'auto' : '450px'}
          open={showDetailModal}
          title={`${employeeSelected.firstName} ${employeeSelected.lastName}`}
          onCancel={() => setShowDetailModal(false)}
          customCancelLabel="Close"
          type="custom"
        >
          <SeeEmployeeDetails employee={employeeSelected} />
        </PopupAtm>
      )}
    </Box>
  );
};

export default EmployeeViewer;
