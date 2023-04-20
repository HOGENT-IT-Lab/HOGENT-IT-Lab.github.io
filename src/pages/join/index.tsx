import Image from 'next/image';
import join from '@/../public/join.gif';

export default function Join() {
	return (
		<div>
			<Image src={join} alt="Join us" className="rounded" />
		</div>
	);
}
