import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../public/locales/en/translation.json' assert { type: 'json' };
import nl from '../../public/locales/nl/translation.json' assert { type: 'json' };

i18next.use(initReactI18next).init({
	lng: 'nl',
	fallbackLng: 'en',
	resources: {
		en: {
			translation: en,
		},
		nl: {
			translation: nl,
		},
	},
});
