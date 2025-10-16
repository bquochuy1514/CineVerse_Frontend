// app/forgot-password/page.tsx
'use client';

import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import AuthHeader from '@/components/auth/shared/AuthHeader';
import Link from 'next/link';
import BackButton from '@/components/shared/BackButton';
import Logo from '@/components/logo/cineverse_logo';
import LoadingIcon from '@/components/auth/shared/LoadingIcon';
import { forgotPassword } from '@/utils/api';

export default function ForgotPasswordPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [focusedField, setFocusedField] = useState(null);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setEmail(e.target.value);
		setErrors({});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Gọi API forgot password
			const result = await forgotPassword({ email });
			console.log('API response success: ', result);
			toast.success(
				'Đã gửi email khôi phục mật khẩu! Đang chuyển hướng...'
			);

			// Redirect sau 2s
			setTimeout(() => {
				router.push(`forgot-password/verify-OTP?email=${email}`);
			}, 2000);
		} catch (error) {
			console.log('API response error: ', error);
			const apiError = error;
			if (apiError.message) {
				if (
					Array.isArray(apiError.message) &&
					apiError.message.length === 1
				) {
					apiError.message.forEach((item) => {
						setErrors({ email: item.messages });
					});
				} else {
					toast.error(
						error.message ||
							'Không thể gửi email khôi phục mật khẩu'
					);
				}
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
			</div>

			<div className="w-full max-w-md relative z-10">
				{/* Back Button */}
				<BackButton />

				{/* Card container */}
				<div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 p-8 relative overflow-hidden">
					{/* Gradient border effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl"></div>

					<Logo />

					<div className="relative z-10 mt-6">
						{/* Header */}
						<AuthHeader
							title="Quên mật khẩu?"
							content1="Đừng lo lắng! Nhập email của bạn và chúng tôi sẽ gửi"
							content2="Email kèm mã OTP để đặt lại mật khẩu."
							showCineverse={false}
						/>

						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Email Input */}
							<div className="group space-y-2">
								<label
									htmlFor="email"
									className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400"
								>
									Email
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
										<FiMail
											className={`text-xl transition-all duration-300 ${
												focusedField === 'email'
													? 'text-purple-400 scale-110'
													: 'text-gray-500'
											}`}
										/>
									</div>
									<input
										type="text"
										name="email"
										id="email"
										value={email}
										onChange={handleChange}
										onFocus={() => setFocusedField('email')}
										onBlur={() => setFocusedField(null)}
										className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
										placeholder="example@email.com"
									/>
								</div>
								{errors.email && (
									<div className="text-red-400 text-sm">
										{errors.email[0]}
									</div>
								)}
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isLoading}
								className="w-full relative cursor-pointer group overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-6 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								</div>
								<span className="relative z-10 text-lg flex items-center justify-center gap-2">
									{isLoading ? (
										<LoadingIcon text="Đang gửi..." />
									) : (
										'Gửi email khôi phục'
									)}
								</span>
							</button>
						</form>

						{/* Additional Info */}
						<div className="mt-6 text-center">
							<p className="text-sm text-gray-400">
								Bạn nhớ ra mật khẩu?{' '}
								<Link
									href="/login"
									className="text-purple-400 hover:text-pink-400 underline underline-offset-2 font-semibold transition-colors duration-300"
								>
									Đăng nhập ngay
								</Link>
							</p>
						</div>
					</div>
				</div>

				{/* Footer text */}
				<p className="text-center text-gray-500 text-sm mt-6">
					Chúng tôi sẽ gửi hướng dẫn khôi phục mật khẩu đến email của
					bạn
				</p>
			</div>
		</div>
	);
}
