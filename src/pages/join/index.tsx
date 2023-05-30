import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import join from '@/../public/join.gif';
import styles from '@/styles/contact.module.scss';

export default function Join() {
	const { t } = useTranslation();
	const router = useRouter();
	return (
		<div>
			<div className="mx-5 flex flex-col gap-8 rounded p-8 pt-6 md:w-[60%]">
				<div>
					<h4>&gt; {t('joinUs')}?</h4>
					<Image src={join} alt="Join us" className="rounded" />
					<div className="">{t('weAccept')}</div>
				</div>
				<div className={styles.container}>
					<form
						action="mailto:itlab.hg@gmail.com"
						method="post"
						encType="text/plain"
					>
						<label htmlFor="name">
							{t('name')}:<span className={styles.required}>*</span>
						</label>
						<input type="text" id="name" name="name" required />

						<label htmlFor="discordHandle">{t('discord')}:</label>
						<input type="text" id="discordHandle" name="discordHandle" />

						<label htmlFor="specialization">
							{t('specialization')}:<span className={styles.required}>*</span>
						</label>
						<select id="specialization" name="specialization" required>
							<option value="mobileEnterprise">
								Mobile & Enterprise Development
							</option>
							<option value="dataAi">AI & Data Engineering</option>
							<option value="mainframe">Mainframes</option>
							<option value="systemNetwork">
								System & Network Administration
							</option>
							<option value="functionalBusiness">
								Functional & Business Analyst
							</option>
						</select>

						<label htmlFor="motivation">{t('motivation')}</label>
						<textarea id="motivation" name="motivation"></textarea>

						<input
							type="submit"
							value={`${t('send')}`}
							onClick={() => router.push('/')}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
