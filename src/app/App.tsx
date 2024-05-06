import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { getRoutes } from 'router';
import { Header, Sidebar } from 'common/components';
import { IROLE } from 'types/roles';
import styles from './styles.module.scss';

export const App = () => {
  const role: IROLE.RoleObject = {
    role: 'Manager',
    permissions: {
      Drink: true,
      Eat: true
    }
  };
  const routes = useRoutes(getRoutes(role));
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <Suspense fallback={<p style={{ color: 'red' }}>loading...</p>}>{routes}</Suspense>
      </div>
    </>
  );
};
