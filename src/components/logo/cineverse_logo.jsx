import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ width = 200, height = 200, canClick = true }) {
	return canClick ? (
		<Link href="/">
			<div className="flex items-center justify-center h-full w-full">
				<Image
					src="/cineverse-logo.png"
					alt="CineVerse Logo"
					width={width}
					height={height}
					priority
					className="cursor-pointer"
				/>
			</div>
		</Link>
	) : (
		<div className="flex items-center justify-center h-full w-full">
			<Image
				src="/cineverse-logo.png"
				alt="CineVerse Logo"
				width={width}
				height={height}
				priority
			/>
		</div>
	);
}
