import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import logo from '@/../public/logo.png';
import styles from '@/styles/layout.module.scss';
import AuthPanel from './AuthPanel';
import LanguagePicker from './LanguagePicker';

function Navbar() {
	const { t } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	function toggleMobileMenu() {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}

	return (
		<div>
			<div className={styles.navbar}>
				<Image src={logo} alt="home" height={80} />
				<div
					className={`${styles.navLinks} md:flex md:items-center md:space-x-4`}
				>
					<Link href="/">{t('home')}</Link>
					<Link href="/about">{t('about')}</Link>
					<Link href="/contact">{t('contact')}</Link>
				</div>
				<div className={styles.navLinks}>
					{' '}
					<LanguagePicker />
					<Link href="/join" className={styles.join}>
						{t('join')}
					</Link>
					<AuthPanel />
				</div>
				<button onClick={toggleMobileMenu} className={styles.hamburger}>
					<div className="space-y-1.5 rounded p-2 shadow">
						<span className="block h-0.5 w-5 bg-gray-100"></span>
						<span className="block h-0.5 w-5 bg-gray-100"></span>
						<span className="block h-0.5 w-5 bg-gray-100"></span>
					</div>
				</button>
			</div>
			{isMobileMenuOpen && (
				<div className="m-4 mt-5 flex  flex-col space-y-4 text-center md:hidden">
					<Link onClick={toggleMobileMenu} href="/">
						{t('home')}
					</Link>
					<Link onClick={toggleMobileMenu} href="/about">
						{t('about')}
					</Link>
					<Link onClick={toggleMobileMenu} href="/contact">
						{t('contact')}
					</Link>
					<Link
						onClick={toggleMobileMenu}
						href="/join"
						style={{ backgroundColor: 'green' }}
					>
						{t('join')}
					</Link>
					<div className="m-2 flex justify-between">
						<LanguagePicker />
						<AuthPanel />
					</div>
				</div>
			)}
		</div>
	);
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<title>IT Lab HoGent</title>
				<link rel="icon" href="/logo.png" />
				<meta
					name="description"
					content="IT Lab is een initiatief voor studenten, door studenten van HoGent."
				/>
			</Head>

			<div className={styles.layout}>
				<Navbar />
				<main>{children}</main>
				<footer>2023 © IT Lab HoGent - itlab.hg@gmail.com</footer>
			</div>
		</>
	);
}
