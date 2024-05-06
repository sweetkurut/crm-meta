import { lazy } from 'react';
import { IRoute } from '../types/common';
import { ROLES } from '../types/roles';
import { adminLabels as labels, adminPath as paths } from '../types/routes/admin';

const AdminPage = lazy(() => import('../pages/admin/AdminPage'));
const NotFound = lazy(() => import('../pages/admin/NotFound'));
const MainPage = lazy(() => import('../pages/admin/MainPage'));

export const adminRoutes: IRoute[] = [
  {
    path: paths.adminPage,
    label: labels.adminPage,
    roles: [ROLES.ADMIN],
    element: <AdminPage />
  },
  {
    path: paths.notFound,
    label: labels.notFound,
    roles: [ROLES.ADMIN, ROLES.INTERN, ROLES.MANAGER, ROLES.SUPERVISOR],
    element: <NotFound />
  },
  {
    path: paths.main,
    label: labels.main,
    roles: [ROLES.ADMIN, ROLES.INTERN, ROLES.MANAGER, ROLES.SUPERVISOR],
    element: <MainPage />
  }
];
