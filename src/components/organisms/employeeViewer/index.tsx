// @packages
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { v4 as uuidV4 } from 'uuid';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Tooltip,
} from '@mui/material';

// @scripts
import ActionButtonAtm from '../../atoms/action-button-atm';
import AddOrEditEmployee from './addOrEditEmployee';
import PopupAtm from '../../atoms/popup-atm';
import SeeEmployeeDetails from './seeEmployeeDetails';
import TypographyAtm from '../../atoms/typography-atm';
import employeeDetail from '../../../config/master-data/employeeDetail.json';
import employees from '../../../config/master-data/employee.json';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { defaultValues, schema } from './schema';

// @types
import { IEmployees } from '../../../types/utils';

// @styles
import styles from './index.module.scss';

interface EmployeeViewerProps {
  dataTestId?: string;
}

const EmployeeViewer: React.FC = ({ dataTestId = 'employee-viewer' }: EmployeeViewerProps) => {
  const breakpoint = useBreakpoint();
  const [employeeList, setEmployeeList] = useState<IEmployees[]>(employees);
  const [employeeSelected, setEmployeeSelected] = useState<IEmployees>({} as IEmployees);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [addOrEditEmployee, setAddOrEditEmployee] = useState({
    isEditing: false,
    open: false,
    type: '',
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
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

    setEmployeeList([...employeeList, newData]);
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

    setEmployeeList(newEmployeeList);
    setAddOrEditEmployee({ isEditing: false, open: false, type: '' });
  };

  console.log(employeeSelected);

  return (
    <Box className={styles.root}>
      <TypographyAtm variant="h2" muiProps={{ color: 'primary', display: 'flex', justifyContent: 'center' }}>
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
      </Grid>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ width: '10%', fontWeight: 'bold' }}>
                {t('text:actions')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>
                {t('text:firstName')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>
                {t('text:lastName')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>
                {t('text:positionTitle')}
              </TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>
                {t('text:dateArrival')}
              </TableCell>
              <TableCell sx={{ width: '10%', fontWeight: 'bold' }}>
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
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.positionTitle}</TableCell>
                <TableCell>{employee.dateArrival}</TableCell>
                <TableCell>{employee.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {addOrEditEmployee.open && (
        <PopupAtm
          width={(breakpoint === 'xs' || breakpoint === 'sm') ? 'auto' : '1200px'}
          height={(breakpoint === 'xs' || breakpoint === 'sm') ? 'auto' : '800px'}
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
            errors={errors as any}
            register={register as any}
            watch={watch as any}
          />
        </PopupAtm>
      )}
      {showDeleteModal && (
        <PopupAtm
          width="600px"
          open={showDeleteModal}
          title={`Delete ${employeeSelected.firstName} ${employeeSelected.lastName}`}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            setEmployeeList(employeeList.filter((employee) => employee.id !== employeeSelected.id));
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
          width="1200px"
          height="470px"
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
