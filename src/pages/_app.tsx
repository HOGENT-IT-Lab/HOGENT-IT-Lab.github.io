import React from 'react';
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.scss';

type Props = AppProps & { Component: React.ReactNode };

export default function MyApp({ Component, pageProps }: Props) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
