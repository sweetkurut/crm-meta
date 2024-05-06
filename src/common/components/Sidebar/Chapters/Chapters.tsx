import { useAppSelector } from 'common/hooks';
import { sidebarSelectors } from 'api/admin/sidebar/sidebar.selectors';
import calendarIcon from '../../../assets/icons/sidebar/001-calendar.png';
import mailIcon from '../../../assets/icons/sidebar/002-empty-email.png';
import docsIcon from '../../../assets/icons/sidebar/003-documents.png';
import crmIcon from '../../../assets/icons/sidebar/004-crm.png';
import styles from '../styles.module.scss';

const Chapters = () => {
  const { isShowSidebar } = useAppSelector(sidebarSelectors.sidebar);

  const chapters = [
    {
      title: 'Почта',
      icon: mailIcon
    },
    {
      title: 'Документы',
      icon: docsIcon
    },
    {
      title: 'CRM',
      icon: crmIcon
    },
    {
      title: 'Календарь',
      icon: calendarIcon
    }
  ];

  return (
    <ul className={styles.chapter}>
      {chapters.map((i, index) => {
        if (isShowSidebar) {
          return <img key={index} src={i.icon} alt={i.title} />;
        }
        return <li key={index}>{i.title}</li>;
      })}
    </ul>
  );
};

export default Chapters;
