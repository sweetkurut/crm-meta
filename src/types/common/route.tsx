import { ReactElement } from 'react';
import { IROLE } from '../roles';

export type IRoute = {
  path: string;
  label: string;
  element?: ReactElement;
  children?: IRoute[];
  roles: IROLE.RoleObject[];
};
