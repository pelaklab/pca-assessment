import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Rapid Screening Battery for Eye Clinics",
  description: "A quick screening assessment for eye clinics, for post-cortical atrophy (PCA) screening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
