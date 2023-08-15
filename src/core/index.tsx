// @scripts
import { initializeServiceMocker } from './service-mocker';

const initializeApp = () => {
  const serviceMocker = initializeServiceMocker();
  return serviceMocker;
};

export default initializeApp;
