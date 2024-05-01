import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { getRoutes } from 'router';
import { IROLE } from 'types/roles';

export const App = () => {
  const role: IROLE.RoleObject = {
    role: 'Admin',
    permissions: {
      Drink: true,
      Eat: true
    }
  };
  const routes = useRoutes(getRoutes(role));
  return <Suspense fallback={<p style={{ color: 'red' }}>loading...</p>}>{routes}</Suspense>;
};
