'use client';

import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function ShowPasswordButton({ show, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			tabIndex={-1}
			className="absolute inset-y-0 cursor-pointer right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 z-10"
		>
			{show ? (
				<FiEyeOff className="text-xl" />
			) : (
				<FiEye className="text-xl" />
			)}
		</button>
	);
}
