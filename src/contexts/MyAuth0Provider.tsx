import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

function MyAuth0Provider({ children }: { children: ReactNode }) {
	const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
	const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
	const audience = process.env.NEXT_PUBLIC_AUTH0_API_AUDIENCE;
	const redirect =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000/'
			: 'https://tieproost.github.io';

	return (
		<Auth0Provider
			domain={domain!}
			clientId={clientId!}
			cacheLocation="localstorage"
			authorizationParams={{
				redirect_uri: redirect,
				audience,
			}}
			useRefreshTokens
		>
			{children}
		</Auth0Provider>
	);
}

export default MyAuth0Provider;
