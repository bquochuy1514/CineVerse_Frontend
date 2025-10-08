import Header from '@/components/layout/Header';

export const metadata = {
	title: 'Cineverse - Trang chủ',
	description: 'Khám phá và đặt vé xem phim mới nhất',
};

export default function MainLayout({ children }) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<Header />
			<main>{children}</main>
			<footer>Footer</footer>
		</div>
	);
}
