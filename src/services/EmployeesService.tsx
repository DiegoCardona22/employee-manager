// @packages
import axios from 'axios';

// @scripts
import services from './index';

// @types
import { IEmployees } from '../types/utils';

export default new (class EmployeesService {
  getEmployees = async () => {
    try {
      const response = await axios.get(services.employees.getEmployees);
      return response.data;
    } catch (error) {
      await Promise.reject(error);
      throw error;
    }
  };

  getEmployeeDetails = async () => {
    try {
      const response = await axios.get(services.employees.getEmployeeDetails);
      return response.data;
    } catch (error) {
      await Promise.reject(error);
      throw error;
    }
  };

  addEmployee = async (employee: IEmployees) => {
    try {
      const response = await axios.post(services.employees.addEmployee, employee);
      return response.data;
    } catch (error) {
      await Promise.reject(error);
      throw error;
    }
  };

  updateEmployee = async (employee: string) => {
    try {
      const response = await axios.put(services.employees.updateEmployee, employee);
      return response.data;
    } catch (error) {
      await Promise.reject(error);
      throw error;
    }
  };

  deleteEmployee = async (employeeId: string) => {
    try {
      const response = await axios.delete(`${services.employees.deleteEmployee}/${employeeId}`);
      return response.data;
    } catch (error) {
      await Promise.reject(error);
      throw error;
    }
  };
})();
