import cn from 'classnames';
import { useAppSelector } from 'common/hooks';
import { sidebarSelectors } from 'api/admin/sidebar/sidebar.selectors';
import Chapters from './Chapters/Chapters';
import styles from './styles.module.scss';

export const Sidebar = () => {
  const { isShowSidebar } = useAppSelector(sidebarSelectors.sidebar);

  return (
    <aside className={cn(styles.sidebar, { [styles.isClosed]: isShowSidebar })}>
      <Chapters />
    </aside>
  );
};
