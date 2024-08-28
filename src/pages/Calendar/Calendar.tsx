import { FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button } from 'common/ui';
import { Modal } from 'common/components';
import { birthdays, notes } from './Calendar.helper';
import { DaysGrid } from './DaysGrid';
import { MonthSwitcher } from './MonthSwitcher';
import { NoteForm } from './NoteForm';
import styles from './styles.module.scss';

import { BUTTON_TYPES } from 'types/enums';

export const Calendar: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [noteOpen, setNoteOpen] = useState<boolean>(false);

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, 'month'));
  };

  const onCloseFormModal = () => setNoteOpen(false);

  const createNote = () => {
    console.log('create');
    onCloseFormModal();
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar_head}>
        <MonthSwitcher currentMonth={currentMonth} onPreviousMonth={handlePreviousMonth} onNextMonth={handleNextMonth} />
        <Button styleType={BUTTON_TYPES.YELLOW} text='добавить заметку' onClick={() => setNoteOpen(true)} />
      </div>
      <DaysGrid currentMonth={currentMonth} birthdays={birthdays} notes={notes} />
      <Modal isOpen={noteOpen} onClose={onCloseFormModal}>
        <NoteForm createAction={createNote} />
      </Modal>
    </div>
  );
};
