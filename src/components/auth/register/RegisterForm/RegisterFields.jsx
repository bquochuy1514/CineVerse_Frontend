'use client';

import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import ShowPasswordButton from '../../shared/ShowPasswordButton';
import { registerUser } from '@/utils/api';

export default function RegisterFields() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [focusedField, setFocusedField] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrors({});
		console.log('formData: ', formData);
		try {
			const result = await registerUser(formData);
			console.log('API response success: ', result);
			alert(result.message);
		} catch (error) {
			console.log('API response error: ', error);

			const apiError = error;
			if (apiError.message) {
				if (Array.isArray(apiError.message)) {
					const errorObj = {};
					apiError.message.forEach((item) => {
						errorObj[item.field] = item.messages;
					});
					setErrors(errorObj);
				} else {
					alert(apiError.message);
				}
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
			{/* Full Name Input */}
			<div className="group space-y-2">
				<label
					htmlFor="fullname"
					className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400"
				>
					Họ và tên
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center z-10">
						<FiUser
							className={`text-xl transition-all duration-300 ${
								focusedField === 'fullName'
									? 'text-purple-400 scale-110'
									: 'text-gray-500'
							}`}
						/>
					</div>
					<input
						type="text"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						onFocus={() => setFocusedField('fullName')}
						onBlur={() => setFocusedField(null)}
						className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
						placeholder="Nguyễn Văn A"
					/>
				</div>
				{errors.fullName && (
					<div className="text-red-400 text-sm">
						{errors.fullName[0]}
					</div>
				)}
			</div>

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
						value={formData.email}
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

			{/* Password Input */}
			<div className="group space-y-2">
				<label
					htmlFor="password"
					className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400"
				>
					Mật khẩu
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
						<FiLock
							className={`text-xl transition-all duration-300 ${
								focusedField === 'password'
									? 'text-purple-400 scale-110'
									: 'text-gray-500'
							}`}
						/>
					</div>
					<input
						type={showPassword ? 'text' : 'password'}
						name="password"
						value={formData.password}
						onChange={handleChange}
						onFocus={() => setFocusedField('password')}
						onBlur={() => setFocusedField(null)}
						className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
						placeholder="••••••••"
					/>
					<ShowPasswordButton
						show={showPassword}
						onClick={() => setShowPassword(!showPassword)}
					/>
				</div>
				{errors.password && (
					<div className="text-red-400 text-sm">
						{errors.password[0]}
					</div>
				)}
			</div>

			{/* Confirm Password Input */}
			<div className="group space-y-2">
				<label
					htmlFor="confirmPassword"
					className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400"
				>
					Xác nhận mật khẩu
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
						<FiLock
							className={`text-xl transition-all duration-300 ${
								focusedField === 'confirmPassword'
									? 'text-purple-400 scale-110'
									: 'text-gray-500'
							}`}
						/>
					</div>
					<input
						type={showConfirmPassword ? 'text' : 'password'}
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						onFocus={() => setFocusedField('confirmPassword')}
						onBlur={() => setFocusedField(null)}
						className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
						placeholder="••••••••"
					/>
					<ShowPasswordButton
						show={showConfirmPassword}
						onClick={() =>
							setShowConfirmPassword(!showConfirmPassword)
						}
					/>
				</div>
				{errors.confirmPassword && (
					<div className="text-red-400 text-sm">
						{errors.confirmPassword[0]}
					</div>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isLoading}
				className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4 active:scale-[0.98]"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
				</div>
				<span className="relative z-10 text-lg">
					{isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
				</span>
			</button>
		</form>
	);
}
