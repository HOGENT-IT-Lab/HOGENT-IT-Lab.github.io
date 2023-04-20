import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logo.png';
import styles from '@/styles/layout.module.scss';

function Navbar() {
	return (
		<div className={styles.navbar}>
			<Image src={logo} alt="home" height={80} />
			<div>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<Link href="/join" className={styles.join}>
				Join IT Lab als helper!
			</Link>
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
