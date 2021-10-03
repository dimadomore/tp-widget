import { h } from 'preact';
import { useState } from 'preact/hooks';

import { useContainerWidth } from './hooks';
import { DatePicker } from './components';

import './reset.css';
import styles from './index.module.css';

interface PeriodDate {
  from: string;
  to: string;
}

export const App = () => {
  const [ref, , responsiveClassName] = useContainerWidth();
  const [date, setDate] = useState<PeriodDate>({ from: '', to: '' });

  const handleDateChange = (name: string, value: string) => {
    setDate({ ...date, [name]: value });
  };

  console.log(styles['']);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.primaryText}>
        Where does it come from? Why do we use it?
      </div>
      <div className={`${styles.wrapper} ${styles[responsiveClassName] ?? ''}`}>
        <p className={styles.secondaryText}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <DatePicker
          name="from"
          value={date.from}
          placeholder="Depart date"
          onChange={handleDateChange}
        />
        <DatePicker
          name="to"
          value={date.to}
          placeholder="Return date"
          onChange={handleDateChange}
        />
        <button className={styles.submit}>Search</button>
      </div>
    </div>
  );
};
