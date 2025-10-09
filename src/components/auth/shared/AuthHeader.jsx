export default function AuthHeader({ title, content1, content2 }) {
	return (
		<div className="text-center mb-12">
			<div className="relative inline-block mb-4">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-3 animate-pulse">
					{title}
				</h1>
				<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
			</div>

			<p className="text-gray-300 text-lg font-light tracking-wide">
				{content1} {/* Khám phá vũ trụ điện ảnh cùng{' '} */}
				<span className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
					Cineverse
				</span>
				{' — '}
				{content2}
				{/* — nơi cảm xúc và đam mê điện ảnh hòa quyện */}
			</p>

			<div className="flex justify-center gap-2 mt-6">
				<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
				<div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse delay-75"></div>
				<div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse delay-150"></div>
			</div>
		</div>
	);
}
