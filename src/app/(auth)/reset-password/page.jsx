'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthHeader from '@/components/auth/shared/AuthHeader';
import { useRouter, useSearchParams } from 'next/navigation';
import { resetPassword } from '@/utils/api';
import BackButton from '@/components/shared/BackButton';
import LoadingIcon from '@/components/auth/shared/LoadingIcon';

export default function ResetPassword() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	// Lấy email từ URL
	useEffect(() => {
		const emailFromQuery = searchParams.get('email');
		if (emailFromQuery) {
			setEmail(emailFromQuery);
		}
	}, [searchParams]);

	// Xử lý đặt lại mật khẩu
	const handleResetPassword = async (e) => {
		e.preventDefault();

		setLoading(true);
		try {
			const result = await resetPassword({
				email,
				password,
				confirmPassword,
			});
			console.log('>>> Check reset password result ', result);
			toast.success(result.message || 'Đặt lại mật khẩu thành công!');
			setTimeout(() => {
				router.push('/login');
			}, 2000);
		} catch (err) {
			console.error('>>> check reset password error', err);
			const apiErrorMessages = err.message;
			const errorObj = {};
			if (Array.isArray(apiErrorMessages)) {
				apiErrorMessages.forEach((item) => {
					errorObj[item.field] = item.messages;
				});
				setErrors(errorObj);
			} else {
				toast.error(err.message);
			}

			toast.error(err.response?.data?.message || err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black">
			<BackButton />

			<AuthHeader
				title="Đặt lại mật khẩu"
				content1="Vui lòng kiểm tra email của bạn!"
				content2="Nhập mã OTP và mật khẩu mới bên dưới."
				showCineverse={false}
			/>

			<form
				onSubmit={handleResetPassword}
				className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md"
			>
				<label className="block text-gray-200 mb-2 font-medium">
					Email
				</label>
				<input
					disabled
					type="email"
					className="w-full p-3 rounded-md bg-white/20 text-white cursor-not-allowed placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					value={email}
				/>

				<label className="block text-gray-200 mb-2 font-medium mt-6">
					Mật khẩu mới
				</label>
				<input
					type="password"
					className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					placeholder="Nhập mật khẩu mới..."
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						setErrors((prev) => ({
							...prev,
							password: null,
						}));
					}}
				/>
				{errors.password && (
					<div className="text-red-400 text-sm mt-2">
						{errors.password[0]}
					</div>
				)}

				<label className="block text-gray-200 mb-2 font-medium mt-6">
					Xác nhận mật khẩu mới
				</label>
				<input
					type="password"
					className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					placeholder="Nhập mật khẩu mới..."
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value);
						setErrors((prev) => ({
							...prev,
							confirmPassword: null,
						}));
					}}
				/>
				{errors.confirmPassword && (
					<div className="text-red-400 text-sm mt-2">
						{errors.confirmPassword[0]}
					</div>
				)}

				<button
					type="submit"
					disabled={loading}
					className="w-full relative group cursor-pointer overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 text-white font-bold py-3 px-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none mt-6 active:scale-[0.98]"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
					</div>
					<span className="relative z-10 text-lg">
						{loading ? (
							<LoadingIcon text="Đang xử lý..." />
						) : (
							'Đặt lại mật khẩu'
						)}
					</span>
				</button>
			</form>
		</div>
	);
}
