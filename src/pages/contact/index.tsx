import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '@/styles/contact.module.scss';
import qr from '@/../public/IT_LAB_QR.png';

export default function Contact() {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<h4 className={styles.heading}>{t('contactUs')}</h4>
			<a href="https://discord.gg/tihogent">
				<Image src={qr} alt="Join us" className="rounded" />
			</a>
			{/* <form
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

				<label htmlFor="subject">
					{t('subject')}:<span className={styles.required}>*</span>
				</label>
				<input type="text" id="subject" name="subject" required />

				<label htmlFor="message">
					{t('message')}:<span className={styles.required}>*</span>
				</label>
				<textarea id="message" name="message" required></textarea>

				<input type="submit" value={`${t('send')}`} />
			</form> */}
		</div>
	);
}
