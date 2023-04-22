import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center">
			<div className="pb-3 text-center">
				<h4>{t('welcome')}</h4>
			</div>
			<iframe
				className="h-[500px] w-[95vw] rounded border border-gh-border md:h-[600px] md:w-[800px]"
				src="https://calendar.google.com/calendar/embed?wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBrussels&showTitle=0&showTabs=0&showDate=1&showPrint=0&showCalendars=0&hl=nl_BE&src=aXRsYWIuaGdAZ21haWwuY29t&color=%23039BE5"
			></iframe>
		</div>
	);
}
