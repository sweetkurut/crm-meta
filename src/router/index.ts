import { validateRole } from 'common/helpers';
import { IRoute } from 'types/common';
import { IROLE } from 'types/roles';
import { adminRoutes } from './admin.routes';

const routes: IRoute[] = [...adminRoutes];

export const getRoutes = (user: IROLE.RoleObject): IRoute[] => {
  return routes.filter((route) => validateRole(route.roles, user));
};
