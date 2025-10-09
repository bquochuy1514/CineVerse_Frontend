'use client';

import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import ShowPasswordButton from '../../shared/ShowPasswordButton';
import { loginUser } from '@/utils/api';

export default function LoginFields() {
	const [showPassword, setShowPassword] = useState(false);
	const [focusedField, setFocusedField] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const [formData, setFormData] = useState({
		email: '',
		password: '',
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
			const result = await loginUser(formData);
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
			{/* Email Input */}
			<div className="group space-y-2">
				<label
					htmlFor="email"
					className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-cyan-400"
				>
					Email
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
						<FiMail
							className={`text-xl transition-all duration-300 ${
								focusedField === 'email'
									? 'text-cyan-400 scale-110'
									: 'text-gray-500'
							}`}
						/>
					</div>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						onFocus={() => setFocusedField('email')}
						onBlur={() => setFocusedField(null)}
						className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
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
					className="block text-sm font-semibold text-gray-300 mb-2 transition-colors group-focus-within:text-cyan-400"
				>
					Mật khẩu
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
						<FiLock
							className={`text-xl transition-all duration-300 ${
								focusedField === 'password'
									? 'text-cyan-400 scale-110'
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
						className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl pl-12 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500 relative z-0"
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

			{/* Remember Me & Forgot Password */}
			<div className="flex items-center justify-between text-sm">
				<label className="flex items-center cursor-pointer group">
					<input
						type="checkbox"
						className="w-4 h-4 rounded border-gray-600 bg-gray-900/50 text-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 transition-all cursor-pointer"
					/>
					<span className="ml-2 text-gray-400 group-hover:text-gray-300 transition-colors">
						Ghi nhớ đăng nhập
					</span>
				</label>
				<a
					href="#"
					className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline"
				>
					Quên mật khẩu?
				</a>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isLoading}
				className="w-full relative group overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4 active:scale-[0.98]"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
				</div>
				<span className="relative z-10 text-lg">
					{isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
				</span>
			</button>
		</form>
	);
}
