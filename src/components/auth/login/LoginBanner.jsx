// src/components/auth/login/LoginBanner.jsx
'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/logo/cineverse_logo';
import { MdMovie, MdConfirmationNumber, MdPeople } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi2';

const icons = [
	{
		icon: <MdConfirmationNumber className="text-white text-xl" />,
		color: 'from-cyan-400 to-cyan-600',
		title: 'Đặt Vé Nhanh Chóng',
		desc: 'Chọn suất chiếu và thanh toán dễ dàng chỉ trong vài giây',
	},
	{
		icon: <HiSparkles className="text-white text-xl" />,
		color: 'from-purple-400 to-purple-600',
		title: 'Ưu Đãi Độc Quyền',
		desc: 'Nhận voucher và điểm thưởng hấp dẫn dành riêng cho thành viên',
	},
	{
		icon: <MdPeople className="text-white text-xl" />,
		color: 'from-indigo-400 to-indigo-600',
		title: 'Cộng Đồng Yêu Phim',
		desc: 'Chia sẻ và khám phá phim hay cùng hàng triệu người dùng',
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
	hidden: { opacity: 0, x: 30 },
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

export default function LoginBanner() {
	return (
		<div className="relative h-full w-full flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-bl from-[#000814] via-[#1a0033] to-[#25004d]">
			{/* Overlay tối để nổi bật nội dung */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

			{/* Nội dung chính */}
			<motion.div
				className="max-w-xl z-10 text-center lg:text-right"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Logo */}
				<motion.div
					className="mb-10 flex justify-center lg:justify-end"
					initial={{ scale: 0, rotate: 180 }}
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
							Chào mừng trở lại
						</motion.span>
						<motion.span
							className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
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
					Đăng nhập để tiếp tục hành trình điện ảnh tuyệt vời, trải
					nghiệm những bộ phim đỉnh cao và nhận ưu đãi đặc biệt dành
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
								x: -10,
								transition: { duration: 0.2 },
							}}
							className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
						>
							<motion.div
								className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/20`}
								whileHover={{
									scale: 1.1,
									rotate: -5,
									transition: { duration: 0.2 },
								}}
							>
								{item.icon}
							</motion.div>
							<div className="text-left">
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

				{/* Bottom quote */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 1 }}
					className="pt-8"
				>
					<p className="text-purple-300/60 italic text-sm">
						"Mỗi bộ phim là một cuộc phiêu lưu mới"
					</p>
				</motion.div>
			</motion.div>

			{/* Hiệu ứng nền */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Orbs sáng nhẹ */}
				<motion.div
					className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-[100px]"
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
					className="absolute top-1/2 -right-20 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-[100px]"
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
					className="absolute -bottom-20 left-1/4 w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-[100px]"
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
					className="absolute top-20 right-20 w-2 h-2 bg-white/50 rounded-full"
					animate={{
						y: [-10, 10, -10],
						x: [5, -5, 5],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-40 left-32 w-3 h-3 bg-white/40 rounded-full"
					animate={{
						y: [-15, 15, -15],
						x: [-5, 5, -5],
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
					className="absolute bottom-32 right-1/3 w-2 h-2 bg-white/50 rounded-full"
					animate={{
						y: [10, -10, 10],
						x: [8, -8, 8],
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
