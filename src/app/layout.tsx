import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar';
import Slider from './components/slider/slider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fichas Next',
  description: 'Developed by',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {/* <Slider/> */}
        {children}
      </body>
    </html>
  );
}
