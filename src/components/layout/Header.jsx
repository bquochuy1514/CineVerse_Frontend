'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../logo/cineverse_logo';

const navItems = [
	{ label: 'Trang chủ', href: '/' },
	{ label: 'Phim', href: '/movies' },
	{ label: 'Rạp chiếu', href: '/cinemas' },
	{ label: 'Ưu đãi', href: '/promotions' },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-700">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Logo */}
				<Logo width={90} height={40} />

				{/* Navigation */}
				<nav className="hidden md:flex gap-6">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm font-medium transition-colors ${
								pathname === item.href
									? 'text-purple-400'
									: 'text-gray-300 hover:text-white'
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Auth buttons */}
				<div className="flex gap-3">
					<Link
						href="/login"
						className="px-4 py-2 text-sm rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition"
					>
						Đăng nhập
					</Link>
					<Link
						href="/register"
						className="px-4 py-2 text-sm rounded-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white transition"
					>
						Đăng ký
					</Link>
				</div>
			</div>
		</header>
	);
}
