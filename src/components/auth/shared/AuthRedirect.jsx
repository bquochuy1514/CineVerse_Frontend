import Link from 'next/link';

export default function AuthRedirect({ text, linkText, href }) {
	return (
		<div className="mt-6 text-center">
			<p className="text-gray-400">
				{text}{' '}
				<Link
					href={href}
					className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-2 transition-colors duration-200"
				>
					{linkText}
				</Link>
			</p>
		</div>
	);
}
