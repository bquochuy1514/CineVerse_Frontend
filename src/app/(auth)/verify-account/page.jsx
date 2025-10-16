'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthHeader from '@/components/auth/shared/AuthHeader';
import { useRouter, useSearchParams } from 'next/navigation';
import { resendCode, verifyAccount } from '@/utils/api';
import Logo from '@/components/logo/cineverse_logo';
import BackButton from '@/components/shared/BackButton';

export default function ActivateAccountPage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [codeId, setCodeId] = useState('');
	const [loading, setLoading] = useState(false);
	const [countdown, setCountdown] = useState(60); //  đếm ngược 60s
	const [canResend, setCanResend] = useState(false);

	useEffect(() => {
		const emailFromQuery = searchParams.get('email');
		if (emailFromQuery) {
			setEmail(emailFromQuery);
		}
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

	const handleActivate = async (e) => {
		e.preventDefault();

		if (!codeId) {
			toast.warning('Vui lòng nhập mã kích hoạt!');
			return;
		}

		setLoading(true);
		try {
			await verifyAccount({ email, codeId });
			toast.success(
				'Kích hoạt tài khoản thành công! Đang chuyển đến trang đăng nhập...'
			);
			setCodeId('');
			setTimeout(() => {
				router.push('/login');
			}, 2000);
		} catch (err) {
			console.log('check err: ', err);
			toast.error(err.message);
		} finally {
			setLoading(false);
		}
	};

	// 🆕 Thêm hàm gửi lại mã
	const handleResendCode = async () => {
		if (!email) {
			toast.warning('Không tìm thấy email, vui lòng đăng ký lại!');
			return;
		}

		try {
			await resendCode({ email });
			setCountdown(60);
			setCanResend(false);
			toast.success('Mã xác nhận mới đã được gửi đến email của bạn!');
		} catch (err) {
			console.error('>>> check resend code error', err);
			toast.error(err.response?.data?.message || err.message);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black">
			<div className="mb-8">
				<Logo canClick={false} />
			</div>

			<BackButton />

			<AuthHeader
				title="Kích hoạt tài khoản"
				content1="Vui lòng kiểm tra email của bạn !"
				content2="Và kích hoạt tài khoản tại đây!!"
				showCineverse={false}
			/>

			<form
				onSubmit={handleActivate}
				className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md"
			>
				<label className="block text-gray-200 mb-2 font-medium">
					Email đăng ký
				</label>
				<input
					disabled={true}
					type="email"
					className="w-full p-3 mb-4 rounded-md bg-white/20 text-white cursor-not-allowed placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					placeholder="Nhập email..."
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label className="block text-gray-200 mb-2 font-medium">
					Mã kích hoạt
				</label>
				<input
					type="text"
					className="w-full p-3 mb-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					placeholder="Nhập mã trong email..."
					value={codeId}
					onChange={(e) => setCodeId(e.target.value)}
				/>

				<button
					type="submit"
					className="w-full cursor-pointer py-3 mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md font-semibold text-white hover:opacity-90 transition"
				>
					{loading ? 'Đang kích hoạt ...' : 'Kích hoạt tài khoản'}
				</button>
			</form>

			<div className="mt-6 text-center text-gray-400">
				{canResend ? (
					<button
						onClick={handleResendCode}
						className="text-purple-400 cursor-pointer hover:text-pink-400 font-semibold underline underline-offset-2 transition"
					>
						Gửi lại mã kích hoạt tài khoản
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
	);
}
