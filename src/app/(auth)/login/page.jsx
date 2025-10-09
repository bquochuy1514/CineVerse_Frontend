// src/app/login/page.tsx
import LoginBanner from '@/components/auth/login/LoginBanner';
import LoginForm from '@/components/auth/login/LoginForm/LoginForm';

export const metadata = {
	title: 'Đăng nhập - Cineverse',
	description: 'Đăng nhập vào tài khoản Cineverse của bạn',
};

export default function Login() {
	return (
		<main className="flex flex-col lg:flex-row h-screen overflow-hidden">
			{/* Left Side - Form (50%) - Có thể scroll */}
			<section className="relative w-full lg:w-1/2 h-screen overflow-y-auto bg-gradient-to-br from-[#1a1a2e] via-[#1e1b3a] to-[#16213e]">
				{/* Gradient orbs với màu xanh tím */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>

				{/* Content */}
				<div className="relative min-h-screen p-8 flex items-center justify-center">
					<LoginForm />
				</div>
			</section>

			{/* Right Side - Banner (50%) - Cố định, không scroll */}
			<section className="hidden lg:block lg:w-1/2 bg-gradient-to-bl from-indigo-900 via-purple-800 to-purple-900 h-screen overflow-hidden relative">
				{/* Subtle overlay để blend màu */}
				<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a2e]/20"></div>
				<LoginBanner />
			</section>
		</main>
	);
}
