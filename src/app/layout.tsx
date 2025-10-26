// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { PageLoader } from '@/components/layout/page-loader';
import { Suspense } from 'react';
import { PT_Sans, Space_Grotesk } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'FlexFit Gym',
  description: 'Your journey to a healthier lifestyle starts here.',
  icons: { icon: '/favicon.ico' },
  // If you need viewport:
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ptSans.variable} ${spaceGrotesk.variable} font-body bg-background text-foreground antialiased`}>
        <div className="relative flex min-h-dvh flex-col">
          {/* If PageLoader is client-only and uses window/Date.now etc, keep it inside Suspense/dynamic */}
          <Suspense fallback={null}>
            <PageLoader />
          </Suspense>

          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
