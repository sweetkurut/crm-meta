import React, { useRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from 'common/ui';
import { DeleteModal, DropdownModal, FilterByDate, Modal } from 'common/components';
import { useAppDispatch, useAppSelector, useNotify } from 'common/hooks';
import { MESSAGE } from 'common/constants';
import { employeesSelectors } from 'api/admin/employees/employees.selectors';
import { useCreateColumnMutation, useDeleteColumnMutation, useUpdateColumnMutation } from 'api/admin/kanban/kanban.api';
import { setChangeOpenEdgeModal, setColumnId, setIsNewDeal } from 'api/admin/sidebar/sidebar.slice';
import { IColumn, IColumnInfo } from 'types/entities';
import { ROLES } from 'types/roles';
import { Card } from '../Card';
import { ColumnForm } from './ColumnForm';
import styles from './styles.module.scss';

import { DropTargetMonitor, useDrop } from 'react-dnd';

interface ColumnProps {
  index: number;
  col: IColumn;
  onDrop: (id: string, targetColIndex: number, targetIndex: number) => void;
  canDrag: boolean;
}

export const Column: React.FC<ColumnProps> = ({ col, onDrop, index, canDrag }) => {
  const { status, column_name, color, leads, leads_count, id } = col;
  const [openColumnModal, setOpenColumnModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const filterRef = useRef(null);
  const { role } = useAppSelector(employeesSelectors.employees);
  const isManagement = role === ROLES.SENIOR_MANAGER || role === ROLES.DIRECTOR;
  const isSaleColumn = status === 6;
  const isEditableColumn = isManagement && (status === 1 || status === 7);
  const isDelitableColumn = leads_count === 0 && isEditableColumn;
  const isLeadCreatable = status === 1 || status === 2 || status === 3 || status === 4 || status === 5;
  const [createColumn] = useCreateColumnMutation();
  const [deleteColumn] = useDeleteColumnMutation();
  const [updateColumn] = useUpdateColumnMutation();

  const dispatch = useAppDispatch();
  const notify = useNotify();

  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item: { id: string }, monitor: DropTargetMonitor) => {
      const hoverIndex = leads.length;
      const hoverBoundingRect = monitor.getClientOffset();
      const targetIndex = leads.findIndex((_, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          if (hoverBoundingRect && rect.top < hoverBoundingRect.y && rect.bottom > hoverBoundingRect.y) {
            return true;
          }
        }
        return false;
      });
      onDrop(item.id, index, targetIndex === -1 ? hoverIndex : targetIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  const onCloseColumnModal = () => {
    setOpenColumnModal(false);
  };

  const onOpenCreateModal = () => {
    setIsEditing(false);
    setOpenColumnModal(true);
  };

  const onOpenEditModal = () => {
    setIsEditing(true);
    setOpenColumnModal(true);
  };

  const onCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const onClickFilterModal = () => {
    setOpenFilterModal(!openFilterModal);
  };

  const onFilterChange = (start: string, end: string) => {
    console.log({ start, end });
  };

  const onOpen = () => {
    dispatch(setColumnId(id));
    dispatch(setChangeOpenEdgeModal(true));
    dispatch(setIsNewDeal(true));
  };

  const onCreateColumn = (body: IColumnInfo) => {
    createColumn({ body, id })
      .unwrap()
      .then(() => {
        onCloseColumnModal();
        notify(MESSAGE.CREATED, 'success');
      });
  };

  const onColumnDelete = () => {
    deleteColumn(id)
      .unwrap()
      .then(() => {
        onCloseDeleteModal();
        notify(MESSAGE.DELETED, 'success');
      })
      .catch((e) => {
        notify(e.data.message, 'error');
      });
  };

  const onColumnUpdate = (body: IColumnInfo) => {
    updateColumn({ body, id })
      .unwrap()
      .then(() => {
        onCloseColumnModal();
        notify(MESSAGE.UPDATED, 'success');
      });
  };

  return (
    <div className={cn(styles.column, { [styles.isOver]: isOver })}>
      <div className={styles.titleBlock}>
        <div className={cn(styles.roundIcon, styles[color])} style={{ background: color }} />
        <span className={styles.title}>{column_name}</span>
        <span className={styles.count}>({leads_count})</span>
        <div className={styles.actionBlock} style={{ display: isSaleColumn && openFilterModal ? 'flex' : '' }}>
          {isSaleColumn && (
            <div ref={filterRef} onClick={onClickFilterModal} className={styles.filter}>
              <Icon type='calendar-outline' />
            </div>
          )}
          {canDrag && isEditableColumn && <Icon type='edit' onClick={onOpenEditModal} />}
          {canDrag && isDelitableColumn && <Icon type='delete' alt='delete' onClick={() => setOpenDeleteModal(true)} />}
          {canDrag && isManagement && (
            <div className={styles.plus}>
              <Icon type='plus-icon' alt='plus' onClick={onOpenCreateModal} />
            </div>
          )}
        </div>
      </div>
      {isSaleColumn && <span className={styles.totalSum}>200.000$</span>}
      {canDrag && isLeadCreatable && (
        <div className={styles.createBtn} onClick={onOpen}>
          <Icon type='plus-icon' alt='plus' />
        </div>
      )}
      <div className={styles.cardsContainer} ref={drop}>
        {leads.map((task, index) => (
          <Card key={task.id} index={index} data={task} canDrag={canDrag} />
        ))}
      </div>
      <Modal isOpen={openColumnModal} onClose={onCloseColumnModal}>
        <ColumnForm
          onSendSubmit={isEditing ? onColumnUpdate : onCreateColumn}
          formProps={isEditing ? { name: column_name, color, status: 100 } : undefined}
          onCancel={onCloseColumnModal}
        />
      </Modal>
      <DeleteModal
        isOpen={openDeleteModal}
        onCancel={onCloseDeleteModal}
        text={`Вы уверены, что хотите удалить колонку "${column_name}"?`}
        onDelete={onColumnDelete}
      />
      {isSaleColumn && (
        <DropdownModal targetRef={filterRef} onClose={onClickFilterModal} isOpen={openFilterModal}>
          <FilterByDate onFilterChange={onFilterChange} />
        </DropdownModal>
      )}
    </div>
  );
};
