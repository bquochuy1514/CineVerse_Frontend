'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/logo/cineverse_logo';
import { FaFilm, FaTicketAlt, FaStar } from 'react-icons/fa';

const icons = [
	{
		icon: <FaFilm className="text-white text-xl" />,
		color: 'from-emerald-400 to-emerald-600',
		title: 'Kho phim khổng lồ',
		desc: 'Hàng nghìn bộ phim từ Hollywood đến Châu Á, cập nhật mỗi ngày',
	},
	{
		icon: <FaTicketAlt className="text-white text-xl" />,
		color: 'from-blue-400 to-blue-600',
		title: 'Đặt vé siêu nhanh',
		desc: 'Chọn ghế, thanh toán và nhận vé điện tử chỉ trong 10 giây',
	},
	{
		icon: <FaStar className="text-white text-xl" />,
		color: 'from-amber-400 to-amber-600',
		title: 'Ưu đãi thành viên',
		desc: 'Tích điểm, đổi quà và giảm giá độc quyền cho thành viên',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export default function RegisterBanner() {
	return (
		<div className="relative h-full w-full flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#25004d] to-[#000814]">
			{/* Overlay tối để nổi bật nội dung */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

			{/* Nội dung chính */}
			<motion.div
				className="max-w-xl z-10 text-center lg:text-left"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Logo */}
				<motion.div
					className="mb-10 lg:justify-start"
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{
						type: 'spring',
						stiffness: 200,
						damping: 15,
						duration: 0.8,
					}}
				>
					<Logo width={180} height={180} canClick={false} />
				</motion.div>

				{/* Heading */}
				<motion.div variants={itemVariants}>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
						<motion.span
							className="block mb-2 text-white/80 text-2xl font-light"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.6 }}
						>
							Chào mừng đến với
						</motion.span>
						<motion.span
							className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.7, duration: 0.6 }}
						>
							Cineverse
						</motion.span>
					</h2>
				</motion.div>

				<motion.p
					className="text-lg text-white/80 mb-10 leading-relaxed"
					variants={itemVariants}
				>
					Tạo tài khoản để đắm chìm trong không gian điện ảnh đỉnh
					cao, đặt vé nhanh chóng và nhận ưu đãi độc quyền chỉ dành
					riêng cho bạn.
				</motion.p>

				{/* Feature cards */}
				<motion.ul className="space-y-6" variants={containerVariants}>
					{icons.map((item, i) => (
						<motion.li
							key={i}
							variants={cardVariants}
							whileHover={{
								scale: 1.03,
								x: 10,
								transition: { duration: 0.2 },
							}}
							className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
						>
							<motion.div
								className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/20`}
								whileHover={{
									scale: 1.1,
									rotate: 5,
									transition: { duration: 0.2 },
								}}
							>
								{item.icon}
							</motion.div>
							<div>
								<h3 className="text-white font-semibold text-lg mb-1">
									{item.title}
								</h3>
								<p className="text-white/70 text-sm leading-relaxed">
									{item.desc}
								</p>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			{/* Hiệu ứng nền */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Orbs sáng nhẹ */}
				<motion.div
					className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-[100px]"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-1/2 -left-20 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-[100px]"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>
				<motion.div
					className="absolute -bottom-20 right-1/4 w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-[100px]"
					animate={{
						scale: [1, 1.25, 1],
						opacity: [0.2, 0.45, 0.2],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2,
					}}
				/>

				{/* Particles bay nhẹ */}
				<motion.div
					className="absolute top-20 left-20 w-2 h-2 bg-white/50 rounded-full"
					animate={{
						y: [-10, 10, -10],
						x: [-5, 5, -5],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-40 right-32 w-3 h-3 bg-white/40 rounded-full"
					animate={{
						y: [-15, 15, -15],
						x: [5, -5, 5],
						opacity: [0.2, 0.7, 0.2],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 0.5,
					}}
				/>
				<motion.div
					className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/50 rounded-full"
					animate={{
						y: [10, -10, 10],
						x: [-8, 8, -8],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>
			</div>
		</div>
	);
}
