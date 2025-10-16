'use client';

import { useEffect, useState } from 'react';
import { FiShield } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import AuthHeader from '@/components/auth/shared/AuthHeader';
import BackButton from '@/components/shared/BackButton';
import Logo from '@/components/logo/cineverse_logo';
import LoadingIcon from '@/components/auth/shared/LoadingIcon';
import { verifyOTP, resendOTP } from '@/utils/api';

export default function VerifyOTP() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [otpCode, setOtpCode] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [countdown, setCountdown] = useState(60); //  đếm ngược 60s
	const [canResend, setCanResend] = useState(false);

	useEffect(() => {
		const emailFromQuery = searchParams.get('email');
		if (emailFromQuery) setEmail(emailFromQuery);
	}, [searchParams]);

	// Đếm ngược mỗi giây
	useEffect(() => {
		if (countdown > 0) {
			const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			setCanResend(true);
		}
	}, [countdown]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			if (!otpCode) toast.warning('Vui lòng nhập mã OTP');
			const result = await verifyOTP({ email, otpCode });
			console.log('API Response success: ', result);
			toast.success('Xác minh OTP thành công!');
			setTimeout(() => {
				router.push(`/reset-password?email=${email}`);
			}, 1500);
		} catch (error) {
			console.log('API Response error: ', error);
			toast.error(error.message || 'Mã OTP không hợp lệ hoặc đã hết hạn');
		} finally {
			setIsLoading(false);
		}
	};

	// Gửi lại OTP
	const handleResendOTP = async () => {
		try {
			await resendOTP({ email });
			toast.success('Đã gửi lại mã OTP mới!');
			setCountdown(60); // reset lại thời gian
			setCanResend(false);
		} catch (error) {
			toast.error('Không thể gửi lại mã OTP');
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
			</div>

			<div className="w-full max-w-md relative z-10">
				<BackButton />
				<div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 p-8 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl"></div>
					<Logo />

					<div className="relative z-10 mt-6">
						<AuthHeader
							title="Xác minh mã OTP"
							content1="Mã xác nhận đã được gửi đến"
							content2={email}
							showCineverse={false}
						/>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="group space-y-2">
								<label className="block text-sm font-semibold text-gray-300 mb-2">
									Nhập mã OTP
								</label>
								<div className="relative">
									<FiShield className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
									<input
										type="text"
										name="otpCode"
										id="otpCode"
										value={otpCode}
										onChange={(e) =>
											setOtpCode(e.target.value)
										}
										className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
										placeholder="Nhập mã OTP gồm 6 chữ số"
									/>
								</div>
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-gradient-to-r cursor-pointer from-purple-600 via-purple-500 to-pink-500 text-white font-bold py-4 px-4 rounded-xl mt-6 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
							>
								{isLoading ? (
									<LoadingIcon text="Đang xác minh..." />
								) : (
									'Xác minh OTP'
								)}
							</button>
						</form>

						<div className="mt-6 text-center text-gray-400">
							{canResend ? (
								<button
									onClick={handleResendOTP}
									className="text-purple-400 cursor-pointer hover:text-pink-400 font-semibold underline underline-offset-2 transition"
								>
									Gửi lại mã OTP
								</button>
							) : (
								<p>
									Bạn có thể gửi lại mã sau{' '}
									<span className="text-pink-400 font-semibold">
										{countdown}s
									</span>
								</p>
							)}
						</div>
					</div>
				</div>
				<p className="text-center text-gray-500 text-sm mt-6">
					Vui lòng kiểm tra email và nhập đúng mã OTP
				</p>
			</div>
		</div>
	);
}
