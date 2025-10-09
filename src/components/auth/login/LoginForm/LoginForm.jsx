import AuthHeader from '../../shared/AuthHeader';
import AuthRedirect from '../../shared/AuthRedirect';
import Divider from '../../shared/Divider';
import SocialLogin from '../../social_login/SocialLogin';
import LoginFields from './LoginFields';

export default function LoginForm() {
	return (
		<>
			<div className="w-full max-w-md mx-auto">
				{/* Header */}
				<AuthHeader
					title="Đăng nhập tài khoản"
					content1="Khám phá vũ trụ điện ảnh cùng"
					content2="Nơi cảm xúc và đam mê điện ảnh hòa quyện"
				/>

				<LoginFields />

				{/* Divider */}
				<Divider text="Hoặc đăng nhập với" />

				{/* Social Login Buttons */}
				<SocialLogin />

				{/* Login Link */}
				<AuthRedirect
					text="Chưa có tài khoản?"
					linkText="Đăng ký ngay"
					href="/register"
				/>
			</div>
		</>
	);
}
