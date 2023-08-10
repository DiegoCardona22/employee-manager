// @packages
import * as Yup from 'yup';
import { t } from 'i18next';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const schema = Yup.object().shape({
  address: Yup.string()
    .required('Address is required')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*-).+$/,
      'Address must contain at least one letter, one number, and one hyphen.',
    ),
  dateBirth: Yup.string().required('Date of Birth is required').nullable(),
  email: Yup.string().email(t('text:invalidEmail') as string).required(t('text:required') as string),
  firstName: Yup.string().required(t('text:required') as string),
  hireDate: Yup.string().required('Date of Birth is required').nullable(),
  lastName: Yup.string().required(t('text:required') as string),
  locationCity: Yup.string().required(t('text:required') as string),
  middleName: Yup.string().required(t('text:required') as string),
  positionTitle: Yup.string().required(t('text:required') as string),
  salary: Yup.string().required(t('text:required') as string),
  telephone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(t('text:required') as string),
  timeInPosition: Yup.string().required(t('text:required') as string),
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
  phone: '',
  positionTitle: '',
  salary: '',
  telephone: '',
  timeInPosition: '',
};
