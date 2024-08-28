import { FC, forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultValue?: string;
  minDate?: string;
}

export const DatePicker: FC<IProps> = forwardRef<HTMLInputElement, IProps>(({ className, defaultValue, minDate, ...res }, ref) => {
  // под вопросом
  // const [currentDateTime, setCurrentDateTime] = useState('');

  // useEffect(() => {
  //   if (defaultValue) {
  //     setCurrentDateTime(defaultValue);
  //   } else {
  //     const formattedDateTime = dayjs().format('YYYY-MM-DDTHH:mm');
  //     setCurrentDateTime(formattedDateTime);
  //   }
  // }, [defaultValue]);

  return <input type='datetime-local' className={cn(styles.inp, className)} {...res} defaultValue={defaultValue} min={minDate} ref={ref} />;
});

DatePicker.displayName = 'DatePicker';
