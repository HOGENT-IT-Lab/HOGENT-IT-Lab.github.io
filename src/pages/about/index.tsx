import { useTranslation, Trans } from 'react-i18next';

export default function About() {
	const { t } = useTranslation();

	return (
		<div className="mx-5 flex flex-col gap-8 rounded bg-lab-blue p-8 pt-6 md:w-[60%]">
			<div>
				<h4>&gt; {t('goal')}?</h4>
				{t('goalDescription')}
			</div>

			<div>
				<h4>&gt; {t('whatwedo')}?</h4>
				{t('whatwedoDescription')}
			</div>

			<div>
				<h4>&gt; {t('appointment')}?</h4>
				{t('appointmentDescription')}
			</div>

			<div>
				<h4>&gt; {t('events')}?</h4>
				{t('eventsDescription')}
			</div>

			<div>
				<h4>&gt; {t('where')}?</h4>
				<Trans i18nKey="whereDescription" />
			</div>
		</div>
	);
}
