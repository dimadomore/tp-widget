import { h } from 'preact';

import styles from './Wrapper.css';

export const Wrapper = ({ children }: any) => {
  return <div className={styles.wrapper}>{children}</div>;
};
