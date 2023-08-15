// @packages
import _ from 'lodash';

/**
 * Makes a copy of an object converting all its props to camelCase recursively.
 * @param {Object} source - The object to be copied.
 * @returns {Object}
 */

export const copyObjInCamelCase = (source: any): any => {
  if (Array.isArray(source)) {
    return source.map((item) => copyObjInCamelCase(item));
  }
  if (source !== null && source.constructor === Object) {
    return Object.keys(source).reduce(
      (result, key) => ({
        ...result,
        [_.lowerFirst(key)]: copyObjInCamelCase(source[key]),
      }),
      {},
    );
  }
  return source;
};

/**
 * Gets the token from the local storage.
 * @returns {Object}
 * @returns {string} idToken - The token.
 *
*/
export const getTokenSaved = () => {
  const userStr = localStorage.getItem('user');
  const userObj = userStr ? JSON.parse(userStr) : {};
  return { idToken: userObj.jwtToken };
};
