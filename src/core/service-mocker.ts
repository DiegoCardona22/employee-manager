// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import config from '../config';
import services from '../services';

// @types
import { HttpCodes, CustomObject, createMockResponse } from '../types/mock';

const mockedServices = {
  mockServiceGetEmployees: (mockAdapter: MockAdapter) => {
    const url = services.employees.getEmployees;
    mockAdapter.onGet(url).reply(() => createMockResponse({
      data: config.employeesData,
      httpCode: HttpCodes.success,
    }));
  },
  mockServiceGetEmployeeDetails: (mockAdapter: MockAdapter) => {
    const url = services.employees.getEmployeeDetails;
    mockAdapter.onGet(url).reply(() => createMockResponse({
      data: config.employeesDetailsData,
      httpCode: HttpCodes.success,
    }));
  },
} as CustomObject;

export const initializeServiceMocker = () => {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    const mockAdapter = new MockAdapter(axios, {
      delayResponse: 20,
    });
    const serviceMocker = {
      replyWithMockData: () => {
        mockAdapter.reset();
        Object.keys(mockedServices).forEach((key) => {
          mockedServices[key](mockAdapter);
        });
        mockAdapter.onAny().passThrough();
      },
      replyWithNetworkError: () => {
        mockAdapter.reset();
        mockAdapter.onAny().networkError();
      },
    };

    serviceMocker.replyWithMockData();
    return serviceMocker;
  }

  return null;
};
