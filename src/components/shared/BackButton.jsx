'use client';

import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="fixed top-6 left-6 z-50 group"
			aria-label="Quay lại"
		>
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

				<div className="relative cursor-pointer bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3 md:px-4 md:py-3 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/50 flex items-center gap-2">
					<FiArrowLeft className="text-xl text-purple-400 group-hover:text-pink-400 transition-all duration-300 group-hover:-translate-x-1" />
					<span className="hidden md:inline-block text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
						Quay lại
					</span>
				</div>
			</div>
		</button>
	);
}
