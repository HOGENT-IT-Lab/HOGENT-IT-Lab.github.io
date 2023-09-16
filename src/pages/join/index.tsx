import Image from 'next/image';
import join from '@/../public/join.gif';

export default function Join() {
	return (
		<div>
			<a href="https://discord.gg/tihogent">
				<Image src={join} alt="Join us" className="rounded" />
			</a>
		</div>
	);
}
