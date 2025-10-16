import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="vi">
			<body className={inter.className}>
				{children}

				{/* Toast Container */}
				<ToastContainer
					position="top-right"
					autoClose={4000}
					newestOnTop={true}
					closeOnClick={true}
					theme="dark"
				/>
			</body>
		</html>
	);
}
