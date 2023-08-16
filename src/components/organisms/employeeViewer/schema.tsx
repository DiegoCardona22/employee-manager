// @packages
import * as Yup from 'yup';

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
  dateBirth: Yup.string().required('Date of Birth is required').nullable()
    .test('dateBirth', 'Date of birth must be less than today', (value) => {
      const today = new Date();
      const dateBirthDate = new Date(value as unknown as string);

      return dateBirthDate < today;
    })
    .test('dateBirth', 'Date of birth must be greater than 18 years', (value) => {
      const today = new Date();
      const dateBirthDate = new Date(value as unknown as string);
      const years = today.getFullYear() - dateBirthDate.getFullYear();

      return years >= 18;
    }),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  hireDate: Yup.string()
    .required('Date of Birth is required')
    .test('hireDate', 'Hire date must be greater than date of birth', function (value) {
      const { dateBirth } = this.parent;
      const dateBirthDate = new Date(dateBirth);
      const hireDateDate = new Date(value);

      return hireDateDate > dateBirthDate;
    })
    .test('hireDate', 'Hire date must be less than today', (value) => {
      const today = new Date();
      const hireDateDate = new Date(value);

      return hireDateDate < today;
    })
    .test('hireDate', 'Hire date must be greater than birth date by 18 years', function (value) {
      const { dateBirth } = this.parent;
      const dateBirthDate = new Date(dateBirth);
      const hireDateDate = new Date(value);
      const years = hireDateDate.getFullYear() - dateBirthDate.getFullYear();

      return years >= 18;
    })
    .nullable(),
  lastName: Yup.string().required('Last name is required'),
  locationCity: Yup.string().required('Location city is required'),
  middleName: Yup.string().required('Middle name is required'),
  positionTitle: Yup.string().required('Position title is required'),
  salary: Yup.number()
    .nullable()
    .required('Salary is required')
    .positive()
    .integer()
    .typeError('Salary is required'),
  telephone: Yup.number()
    .nullable()
    .test(
      'phone',
      'Phone number is not valid',
      (value) => phoneRegExp.test(value as unknown as string),
    )
    .required('Phone number is required')
    .positive()
    .integer()
    .typeError('Phone number is not valid'),
  timeInPosition: Yup.string()
    .required('Time in position is required')
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
