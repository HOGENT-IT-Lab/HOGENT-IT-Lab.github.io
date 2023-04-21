import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';
import styles from '@/styles/layout.module.scss';

const lngs = ['nl', 'en'];

export default function LanguagePicker() {
	const { i18n } = useTranslation();

	return (
		<div className="flex items-center gap-2">
			<IoLanguageOutline className="text-[#99a0a6]" />
			<div className={styles.language_picker}>
				{lngs.map((lng) => (
					<button
						key={lng}
						onClick={() => i18n.changeLanguage(lng)}
						disabled={i18n.resolvedLanguage === lng}
					>
						{lng}
					</button>
				))}
			</div>
		</div>
	);
}
