import { h, FunctionComponent } from 'preact';

import styles from './MainContainer.module.css';

export const MainContainer: FunctionComponent = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
