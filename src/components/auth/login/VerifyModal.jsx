'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { verifyAccount, resendCode } from '@/utils/api';

export default function VerifyModal({ email, onClose }) {
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);
	const [resending, setResending] = useState(false);

	const handleVerify = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await verifyAccount({ email, codeId: code });
			toast.success('Kích hoạt thành công! Bạn có thể đăng nhập lại.');
			onClose();
		} catch (err) {
			toast.error(err.response?.data?.message || err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleResend = async () => {
		setResending(true);
		setCode('');
		try {
			await resendCode({ email });
			toast.success('Mã mới đã được gửi đến email của bạn!');
		} catch (err) {
			toast.error(err.response?.data?.message || err.message);
		} finally {
			setResending(false);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
			<div className="bg-gray-900 text-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg border border-gray-700 relative">
				<h2 className="text-2xl font-bold text-center mb-4">
					Xác minh tài khoản
				</h2>
				<p className="text-gray-400 text-sm text-center mb-6">
					Một mã xác nhận đã được gửi đến{' '}
					<span className="text-cyan-400">{email}</span>. Nhập mã bên
					dưới để kích hoạt tài khoản của bạn.
				</p>

				<form onSubmit={handleVerify} className="space-y-4">
					<input
						type="text"
						placeholder="Nhập mã kích hoạt..."
						className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
					<button
						type="submit"
						disabled={loading}
						className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md font-semibold hover:opacity-90 transition"
					>
						{loading ? 'Đang xác minh...' : 'Xác minh ngay'}
					</button>
				</form>

				<div className="text-center text-sm mt-4">
					Chưa nhận được mã?{' '}
					<span
						onClick={handleResend}
						className={`text-cyan-400 hover:underline cursor-pointer ${
							resending ? 'opacity-50 pointer-events-none' : ''
						}`}
					>
						{resending ? 'Đang gửi lại...' : 'Gửi lại mã'}
					</span>
				</div>

				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg cursor-pointer"
				>
					✕
				</button>
			</div>
		</div>
	);
}
