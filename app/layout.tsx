import { Nunito } from 'next/font/google';

import ClientOnly from './components/ClientOnly';

import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
	title: 'Next Trip',
	description: 'Plan your trip with Next Trip',
};

const font = Nunito({
	subsets: ['latin'],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<RegisterModal />
					<LoginModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
