import React from 'react';
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import MyAuth0Provider from '@/contexts/MyAuth0Provider';
import '@/styles/globals.scss';

type Props = AppProps & { Component: React.ReactNode };

export default function MyApp({ Component, pageProps }: Props) {
	return (
		<MyAuth0Provider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MyAuth0Provider>
	);
}
