// @packages
import _ from 'lodash';

// @scripts
import { copyObjInCamelCase } from './object';

export enum HttpCodes {
  success = 200,
  unauthorized = 401,
}

export type CustomObject = {
  [key: string]: any;
};

export interface Call {
  data: string;
  params: string[];
}

/**
 * Gets the parameters of a mocked service.
 * @param {{params: object}|{data: string}} call
 * @returns {Object}
 */
export const getMockParams = (call: Call) => {
  const params = copyObjInCamelCase(
    call.params
        || JSON.parse(call.data).params
        || JSON.parse(call.data),
  );
  if (params.sortKey) {
    params.sortKey = _.lowerFirst(params.sortKey);
  }
  return params;
};

/**
 * Creates a response for a mocked service.
 * @param {Object} data - Data to be sent in the response.
 * @param {number} httpCode - Http code associated with the response.
 * @returns {[
 *  httpCode: number,
 *  data: object
 * ]}
 */
export const createMockResponse = ({
  data = {},
  httpCode = 200,
}) => ([httpCode, data]);
