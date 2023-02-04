import './globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr' className={`${inter.variable}`}>
      <head />
      <body className='antialiased bg-linBody text-linBlack'>{children}</body>
    </html>
  );
}
