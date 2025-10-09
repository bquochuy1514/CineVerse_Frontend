import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

export default function SocialLogin() {
	return (
		<div className="space-y-4 mb-8">
			{/* Google Button */}
			<button className="w-full group relative overflow-hidden flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-0.5 active:translate-y-0">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
				</div>
				<FcGoogle className="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
				<span className="relative z-10">Đăng nhập với Google</span>
			</button>

			{/* GitHub Button */}
			<button className="w-full group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-0.5 active:translate-y-0">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
				</div>
				<BsGithub className="text-xl relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
				<span className="relative z-10">Đăng nhập với GitHub</span>
			</button>
		</div>
	);
}
