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
  dateArrival: string;
  firstName: string;
  id: string;
  lastName: string;
  positionTitle: string;
  status: string;
}

export interface IEmployeesDetails {
  address: string;
  dateBirth: string;
  email: string;
  firstName: string;
  hireDate: string;
  id: string;
  lastName: string;
  locationCity: string;
  middleName: string;
  positionTitle: string;
  salary: number | null;
  telephone: number | null;
  timeInPosition: string;
}
