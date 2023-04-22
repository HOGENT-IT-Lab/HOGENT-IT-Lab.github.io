import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';
import useLocalStorageState from 'use-local-storage-state';
import styles from '@/styles/layout.module.scss';

const languages = ['nl', 'en'];

export default function LanguagePicker() {
	const [language, setLanguage] = useLocalStorageState('language');
	const { i18n } = useTranslation();

	useEffect(() => {
		if (typeof language === 'string') i18n.changeLanguage(language);
	}, [language, i18n]);

	return (
		<div className="flex items-center gap-2">
			<IoLanguageOutline className="text-[#99a0a6]" />
			<div className={styles.languagePicker}>
				{languages.map((lng) => (
					<button
						key={lng}
						onClick={() => setLanguage(lng)}
						disabled={language === lng}
					>
						{lng}
					</button>
				))}
			</div>
		</div>
	);
}
