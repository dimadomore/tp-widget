import { h } from 'preact';
// @ts-ignore
import { Datepicker as Datepickerdate } from 'datepickerdate';

import { dateFormatter } from './utils';

import './DatePicker.css';

interface Props {
  value?: string;
  name?: string;
  placeholder?: string;
  calendarColor?: string;
  onChange: (name: string, value: string) => void;
}

export const DatePicker = ({
  value,
  name,
  placeholder,
  onChange,
  calendarColor = '#4990E2',
}: Props) => {
  const calendarIcon = (
    <svg className="calendar-icon" width="15" height="17" viewBox="0 0 15 17">
      <path
        d="M2 7.997742S2.001596 15.248869 2 15l11.002502-.001099c-.001595 0-.005188-6.99945-.005188-6.99945L2 7.99774zM8 11h4v3H8v-3zm7-5v9c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2V6h15zm-3-4.0005v-.99925C12 .448112 11.552 0 11 0h-1c-.552 0-1 .448112-1 1.00025v.99925H6v-.99925C6 .448112 5.552 0 5 0H4c-.552 0-1 .448112-1 1.00025v.99925H2C.895 1.9995 0 2.894724 0 4h15c0-1.105276-.895-2.0005-2-2.0005h-1z"
        fill={calendarColor}
      />
    </svg>
  );

  return (
    <div className="date-picker-container">
      <Datepickerdate
        value={value}
        name={name}
        placeholder={placeholder}
        onDateChanged={onChange}
        formatter={dateFormatter}
      />
      {calendarIcon}
    </div>
  );
};
