import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'SAANNNDEC5TY | Portfolio',
  description: 'Professional programmer portfolio and GitHub profile of SAANNNDEC5TY.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#0d1117] text-[#c9d1d9]">{children}</body>
    </html>
  );
}
