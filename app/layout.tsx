import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapid Screening Battery for Eye Clinics",
  description: "A quick screening assessment for eye clinics, for post-cortical atrophy (PCA) screening",
};

const MyHeader = dynamic(() => import('./components/Header'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
