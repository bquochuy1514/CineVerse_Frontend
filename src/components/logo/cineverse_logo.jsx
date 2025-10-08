import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ width = 200, height = 200, canClick = true }) {
	return canClick ? (
		<Link href="/">
			<Image
				src="/cineverse-logo.png"
				alt="CineVerse Logo"
				width={width}
				height={height}
				priority
				className="cursor-pointer"
			/>
		</Link>
	) : (
		<Image
			src="/cineverse-logo.png"
			alt="CineVerse Logo"
			width={width}
			height={height}
			priority
		/>
	);
}
