import { useRef, useState } from 'react';
import cn from 'classnames';
import { Button, Icon } from 'common/ui';
import { useAppDispatch, useAppSelector } from 'common/hooks';
import { employeesSelectors } from 'api/admin/employees/employees.selectors';
import { sidebarSelectors } from 'api/admin/sidebar/sidebar.selectors';
import { setChangeSidebarVisible } from 'api/admin/sidebar/sidebar.slice';
import { ROLES } from 'types/roles';
import { DropdownModal } from '../DropdownModal';
import { BgWindow } from './BgWindow/BgWindow';
import { CurrenciesWindow } from './CurrenciesWindow/CurrenciesWindow';
import { CurrentTime } from './CurrentTime/CurrentTime';
import { ProfileWindow } from './ProfileWindow/ProfileWindow';
import { StartWindow } from './StartWindow/StartWindow';
import logo from '../../assets/images/logo.png';
import styles from './styles.module.scss';

import { BUTTON_TYPES } from 'types/enums';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isShowSidebar } = useAppSelector(sidebarSelectors.sidebar);
  const { role } = useAppSelector(employeesSelectors.employees);

  const [isTimeModalOpen, setIsTimeModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isExtangesOpen, setIsExtangesOpen] = useState<boolean>(false);
  const [isBgOpen, setIsBgOpen] = useState<boolean>(false);
  const timeRef = useRef(null);
  const profileRef = useRef(null);
  const bgRef = useRef(null);
  const extangesRef = useRef(null);

  const onBurgerClick = () => {
    dispatch(setChangeSidebarVisible(!isShowSidebar));
  };

  if (role === ROLES.UNAUTHORIZED) {
    return null;
  }

  const openTimeModal = () => {
    setIsTimeModalOpen(!isTimeModalOpen);
  };

  const closeTimeModal = () => {
    setIsTimeModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const openExtangesModal = () => {
    setIsExtangesOpen(!isExtangesOpen);
  };

  const closeExtangesModal = () => {
    setIsExtangesOpen(false);
  };

  const openBgModal = () => {
    setIsBgOpen(!isBgOpen);
  };

  const closeBgModal = () => {
    setIsBgOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <Icon type={`burger-${isShowSidebar ? 'open' : 'close'}`} onClick={onBurgerClick} className={styles.burger} alt='burger' />
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <div className={styles.otherBlock}>
        <div className={styles.exchangeRates} onClick={openExtangesModal} ref={extangesRef}>
          <span>Курсы валют</span>
          <Icon type={'arrow-down'} alt='arrow' className={cn({ [styles.open]: isExtangesOpen })} />
        </div>
        {isExtangesOpen && (
          <DropdownModal isOpen={isExtangesOpen} targetRef={extangesRef} onClose={closeExtangesModal}>
            <CurrenciesWindow />
          </DropdownModal>
        )}

        <div className={styles.timeBlock} onClick={openTimeModal} ref={timeRef}>
          <CurrentTime />
          <div className={styles.start}>
            <button className={styles.playBtn}>
              <Icon type='play' alt='play-icon' />
            </button>
            Начать
          </div>
        </div>
        {isTimeModalOpen && (
          <DropdownModal isOpen={isTimeModalOpen} targetRef={timeRef} onClose={closeTimeModal}>
            <StartWindow />
          </DropdownModal>
        )}

        <div className={styles.exchangeRates} onClick={openBgModal} ref={bgRef}>
          <span>Фон</span>
          <Icon type={'arrow-down'} alt='arrow' className={cn({ [styles.open]: isBgOpen })} />
        </div>
        {isBgOpen && (
          <DropdownModal isOpen={isBgOpen} targetRef={bgRef} onClose={closeBgModal}>
            <BgWindow />
          </DropdownModal>
        )}

        <Button text='Профиль' styleType={BUTTON_TYPES.GRAY} onClick={openProfileModal} ref={profileRef} />
        {isProfileModalOpen && (
          <DropdownModal isOpen={isProfileModalOpen} targetRef={profileRef} onClose={closeProfileModal}>
            <ProfileWindow onClose={closeProfileModal} />
          </DropdownModal>
        )}
      </div>
    </header>
  );
};
