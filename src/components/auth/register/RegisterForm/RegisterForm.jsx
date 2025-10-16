// src/components/auth/register/RegisterForm.jsx
'use client';

import SocialLogin from '../../social_login/SocialLogin';
import Divider from '../../shared/Divider';
import AuthRedirect from '../../shared/AuthRedirect';
import RegisterFields from './RegisterFields';
import AuthHeader from '../../shared/AuthHeader';
import HomeButton from '../../../shared/HomeButton';

export default function RegisterForm() {
	return (
		<div className="w-full max-w-md mx-auto py-2">
			<HomeButton />

			{/* Header */}
			<AuthHeader
				title="Đăng ký tài khoản"
				content1="Tham gia"
				content2="Khám phá thế giới điện ảnh của bạn"
			/>

			{/* Form */}
			<RegisterFields />

			{/* Divider */}
			<Divider text="Hoặc đăng nhập với" />

			{/* Social Login Buttons */}
			<SocialLogin />

			{/* Login Link */}
			<AuthRedirect
				text="Bạn đã có tài khoản?"
				linkText="Đăng nhập ngay"
				href="/login"
			/>
		</div>
	);
}
