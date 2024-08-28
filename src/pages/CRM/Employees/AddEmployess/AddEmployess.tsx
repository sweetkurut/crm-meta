import { FormEvent, useState } from 'react';
import { DatePicker, FilePicker } from 'common/ui';
import styles from './style.module.scss';

const AddEmployess = () => {
  const [fio, setFio] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h4 className={styles.title}>Добавить сотрудника</h4>
          <button type='submit' className={styles.submitButton}>
            Создать
          </button>
        </div>
        <div className={styles.field}>
          <div className={styles.field}>
            <label>ФИО</label>
            <input type='text' value={fio} onChange={(e) => setFio(e.target.value)} placeholder='Введите ФИО' className={styles.input} />
          </div>
          <div className={styles.field}>
            <label>Статус</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value=''>Выберите статус</option>
              <option value='Стажёр'>Стажёр</option>
              <option value='Менеджер'>Менеджер</option>
              <option value='Менеджер-руководитель'>Менеджер-руководитель</option>
              <option value='Руководитель'>Руководитель</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Номер телефона</label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='+996 (xxx) xxx-xxx'
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label>Почта</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Введите почту'
              className={styles.input}
            />
          </div>
          <div className={styles.dates}>
            <div className={styles.field}>
              <label>Дата начала стажировки</label>
              <DatePicker />
            </div>
            <div className={styles.field}>
              <label>Дата начала работы</label>
              <DatePicker />
            </div>
          </div>
          <div className={styles.agreement}>
            <label>Договор</label>
            <FilePicker />
          </div>
          <div className={styles.passport}>
            <label>ID паспорт</label>
            <FilePicker />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployess;
