import styles from '@/styles/contact.module.scss';

export default function Contact() {
	return (
		<div className={styles.container}>
			<h4 className={styles.heading}>Contact Us</h4>
			<form
				action="mailto:itlab.hg@gmail.com"
				method="post"
				encType="text/plain"
			>
				<label htmlFor="name">
					Name:<span className={styles.required}>*</span>
				</label>
				<input type="text" id="name" name="name" required />

				<label htmlFor="name">Discord handle:</label>
				<input type="text" id="discordHandle" name="discordHandle" />

				<label htmlFor="subject">
					Subject:<span className={styles.required}>*</span>
				</label>
				<input type="text" id="subject" name="subject" required />

				<label htmlFor="message">
					Message:<span className={styles.required}>*</span>
				</label>
				<textarea id="message" name="message" required></textarea>

				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
