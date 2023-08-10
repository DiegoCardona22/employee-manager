export type IJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type IPlacement =
  | 'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom-end'
  | 'bottom-start'
  | 'left-end'
  | 'left-start'
  | 'right-end'
  | 'right-start'
  | 'top-end'
  | 'top-start';

export type ITypographyVariant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2';

export type ITypographyFontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type TGlobalUI = {
  isSidebarOpen: boolean;
};

export interface IEmployees {
  firstName: string;
  lastName: string;
  positionTitle: string;
  dateArrival: string;
  status: string;
  id: number;
}

export interface IEmployeesDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  locationCity: string;
  address: string;
  dateBirth: string;
  telephone: string;
  positionTitle: string;
  hireDate: string;
  email: string;
  salary: number;
  timeInPosition: string;
  id: number;
}
