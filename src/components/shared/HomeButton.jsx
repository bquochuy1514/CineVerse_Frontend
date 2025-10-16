'use client';

import { useRouter } from 'next/navigation';
import { FiHome } from 'react-icons/fi';

export default function HomeButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push('/')}
			className="fixed top-6 left-6 z-50 group"
			aria-label="Về trang chủ"
		>
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

				<div className="relative cursor-pointer bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3 md:px-4 md:py-3 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/50 flex items-center gap-2">
					<FiHome className="text-xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
					<span className="hidden md:inline-block text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
						Trang chủ
					</span>
				</div>
			</div>
		</button>
	);
}
