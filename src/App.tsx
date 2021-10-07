import { FunctionComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { DatePicker, MainContainer } from './components';
import { useContainerWidth, useLocalization } from './hooks';
import { CustomizationSettings, Period } from './models';
import { applyCustomStyles } from './utils';

import styles from './App.module.css';

export const App: FunctionComponent<CustomizationSettings> = ({
  locale,
  ...customStyles
}) => {
  const [ref, , responsiveClassName] = useContainerWidth();
  const { messages } = useLocalization(locale);
  const [date, setDate] = useState<Period>({ from: '', to: '' });

  useEffect(() => {
    applyCustomStyles(customStyles, ref);
  }, []);

  const handleDateChange = (name: string, value: string) => {
    setDate({ ...date, [name]: value });
  };

  return (
    <MainContainer>
      <div
        ref={ref}
        className={`${styles.container} ${styles[responsiveClassName] ?? ''}`}
      >
        <div className={styles.primaryText}>{messages.primaryText}</div>
        <div
          className={`${styles.wrapper} ${styles[responsiveClassName] ?? ''}`}
        >
          <p className={styles.secondaryText}>{messages.secondaryText}</p>
          <DatePicker
            name="from"
            value={date.from}
            placeholder={messages.dateFromPlaceholder}
            onChange={handleDateChange}
          />
          <DatePicker
            name="to"
            value={date.to}
            placeholder={messages.dateToPlaceholder}
            onChange={handleDateChange}
          />
          <button className={styles.submitButton}>{messages.search}</button>
        </div>
      </div>
    </MainContainer>
  );
};
