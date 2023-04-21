import { useTranslation } from 'react-i18next';

const lngs = { en: 'en', nl: 'nl' };

export default function LanguagePicker() {
	const { i18n } = useTranslation();

	return (
		<div>
			{Object.keys(lngs).map((lng) => (
				<button
					key={lng}
					onClick={() => i18n.changeLanguage(lng)}
					disabled={i18n.resolvedLanguage === lng}
				>
					{lng}
				</button>
			))}
		</div>
	);
}
