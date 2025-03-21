import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Footer, Header, Sidebar } from '@/components/organisms';
import Providers from '@/providers';

const lato = Lato({
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} antialiased font-sans`}>
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto px-5 md:px-8 w-full">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
