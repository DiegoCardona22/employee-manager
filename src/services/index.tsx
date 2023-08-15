// @json
import services from './services.json';

/**
 * @return {Object}
 */
const servicesCasted = () => {
  const servicesString = JSON.stringify(services);

  const parsedServices = Object.entries(import.meta.env).reduce(
    (servicesStrings, [serviceName, serviceUrl]) => servicesStrings.replace(
      new RegExp(`{${serviceName}}`, 'g'),
      serviceUrl,
    ),
    servicesString,
  );

  return JSON.parse(parsedServices);
};

export default servicesCasted();
