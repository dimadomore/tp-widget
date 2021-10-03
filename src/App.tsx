import { h } from 'preact';
import { useState } from 'preact/hooks';

import { useContainerWidth } from './hooks';
import { DatePicker } from './components';

import styles from './index.module.css';
import './reset.css';

interface PeriodDate {
  from: string;
  to: string;
}

export const App = (props: any) => {
  const [ref, , responsiveClassName] = useContainerWidth();
  const [date, setDate] = useState<PeriodDate>({ from: '', to: '' });

  const handleDateChange = (name: string, value: string) => {
    setDate({ ...date, [name]: value });
  };

  const customStyles = {
    container: {
      background: props.bgColor,
    },
    text: {
      color: props.textColor,
    },
    button: {
      background: props.btnColor,
    },
  };

  return (
    <div
      ref={ref}
      className={`${styles.container} ${styles[responsiveClassName] ?? ''}`}
      style={customStyles.container}
    >
      <div className={styles.primaryText} style={customStyles.text}>
        Where does it come from? Why do we use it?
      </div>
      <div className={`${styles.wrapper} ${styles[responsiveClassName] ?? ''}`}>
        <p className={styles.secondaryText} style={customStyles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <DatePicker
          name="from"
          value={date.from}
          placeholder="Depart date"
          onChange={handleDateChange}
          calendarColor={props.bgColor}
        />
        <DatePicker
          name="to"
          value={date.to}
          placeholder="Return date"
          onChange={handleDateChange}
          calendarColor={props.bgColor}
        />
        <button className={styles.submit} style={customStyles.button}>
          Search
        </button>
      </div>
    </div>
  );
};
