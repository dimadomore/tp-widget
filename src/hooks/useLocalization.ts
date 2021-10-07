import { useState } from 'preact/hooks';

import { messages } from '../utils';

enum Locale {
  EN = 'en',
}

// Need to be extended
export const useLocalization = (customLocale?: string) => {
  const [locale, setLocale] = useState<string>(Locale.EN);

  return { messages: messages[Locale.EN], locale };
};
