// @packages
import * as Yup from 'yup';
import { t } from 'i18next';

const addressRegExp = /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d)[A-Za-z\d\s]+$/;
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const timeInPositionRegExp = /^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z])[A-Za-z\d\s]+$/;

export const schema = Yup.object().shape({
  address: Yup.string()
    .required('Address is required')
    .matches(
      addressRegExp,
      'Address must contain at least two letter, two numbers',
    ),
  dateBirth: Yup.string().required('Date of Birth is required').nullable(),
  email: Yup.string().email(t('text:invalidEmail') as string).required(t('text:required') as string),
  firstName: Yup.string().required(t('text:required') as string),
  hireDate: Yup.string().required('Date of Birth is required').nullable(),
  lastName: Yup.string().required(t('text:required') as string),
  locationCity: Yup.string().required(t('text:required') as string),
  middleName: Yup.string().required(t('text:required') as string),
  positionTitle: Yup.string().required(t('text:required') as string),
  salary: Yup.number()
    .nullable()
    .required(t('text:required') as string)
    .positive()
    .integer()
    .typeError(t('text:required') as string),
  telephone: Yup.number()
    .nullable()
    .test('phone', t('text:invalidPhone') as string, (value) => phoneRegExp.test(value as unknown as string))
    .required(t('text:required') as string)
    .positive()
    .integer()
    .typeError(t('text:required') as string),
  timeInPosition: Yup.string()
    .required(t('text:required') as string)
    .matches(
      timeInPositionRegExp,
      'Time in position must contain at least tree letter',
    ),
});

export const defaultValues = {
  address: '',
  dateBirth: '',
  email: '',
  firstName: '',
  hireDate: '',
  id: '',
  lastName: '',
  locationCity: '',
  middleName: '',
  positionTitle: '',
  salary: null,
  telephone: null,
  timeInPosition: '',
};
