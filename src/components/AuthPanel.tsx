import { useAuth0 } from '@auth0/auth0-react';
import { MdAccountCircle, MdLogout } from 'react-icons/md';

export default function AuthPanel() {
	const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

	if (isAuthenticated && !isLoading)
		return (
			<button
				onClick={() =>
					logout({ logoutParams: { returnTo: window.location.origin } })
				}
			>
				<MdLogout className="text-xl" />
			</button>
		);

	if (!isAuthenticated && !isLoading)
		return (
			<button onClick={() => loginWithRedirect()}>
				<MdAccountCircle className="text-xl" />
			</button>
		);

	return (
		<button>
			<MdAccountCircle className="invisible text-xl" />
		</button>
	);
}
