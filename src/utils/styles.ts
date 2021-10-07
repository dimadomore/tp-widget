import { RefObject } from 'preact';

import { StyleCustomizationSettings } from '../models';

export const applyCustomStyles = (
  styles: StyleCustomizationSettings,
  ref: RefObject<any>,
) => {
  if (ref?.current) {
    const priority = 'important';

    styles.bgColor &&
      ref.current.style.setProperty('--bg-color', styles.bgColor, priority);

    styles.textColor &&
      ref.current.style.setProperty('--text-color', styles.textColor, priority);

    styles.btnColor &&
      ref.current.style.setProperty('--btn-color', styles.btnColor, priority);
  }
};
