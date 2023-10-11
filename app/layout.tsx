import { Ubuntu, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/header';

const ubuntu = Ubuntu({
    variable: '--font-ubuntu',
    subsets: ['latin'],
    weight: ['400', '700'],
});

const plexMono = IBM_Plex_Mono({
    variable: '--font-plex-mono',
    subsets: ['latin'],
    weight: ['400', '500'],
});

export const metadata = {
    title: {
        default: 'Home',
        template: '%s | Gustavo Coelho',
    },

    icons: {
        icon: '/images/icons/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="pt-BR"
            className={`${ubuntu.variable} ${plexMono.variable}`}
        >
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
