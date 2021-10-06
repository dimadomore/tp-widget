import { FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';

import { DatePicker, MainContainer } from './components';
import { useContainerWidth, useLocalization } from './hooks';
import { CustomizationSettings, Period } from './models';

import styles from './App.module.css';

export const App: FunctionComponent<CustomizationSettings> = (props) => {
  const [ref, , responsiveClassName] = useContainerWidth();
  const { messages } = useLocalization();
  const [date, setDate] = useState<Period>({ from: '', to: '' });

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
    <MainContainer>
      <div
        ref={ref}
        className={`${styles.container} ${styles[responsiveClassName] ?? ''}`}
        style={customStyles.container}
      >
        <div className={styles.primaryText} style={customStyles.text}>
          {messages.primaryText}
        </div>
        <div
          className={`${styles.wrapper} ${styles[responsiveClassName] ?? ''}`}
        >
          <p className={styles.secondaryText} style={customStyles.text}>
            {messages.secondaryText}
          </p>
          <DatePicker
            name="from"
            value={date.from}
            placeholder={messages.dateFromPlaceholder}
            onChange={handleDateChange}
            calendarColor={props.bgColor}
          />
          <DatePicker
            name="to"
            value={date.to}
            placeholder={messages.dateToPlaceholder}
            onChange={handleDateChange}
            calendarColor={props.bgColor}
          />
          <button className={styles.submitButton} style={customStyles.button}>
            {messages.search}
          </button>
        </div>
      </div>
    </MainContainer>
  );
};
