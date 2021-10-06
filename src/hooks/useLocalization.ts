import { useState } from 'preact/hooks';

import { messages } from '../utils';

enum Locale {
  EN = 'en',
}

export const useLocalization = () => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);

  return { locale, messages: messages[locale] };
};
