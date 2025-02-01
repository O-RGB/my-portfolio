import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

// const noto = Noto_Sans_Thai({
//   variable: "--font-noto-sans",
//   subsets: ["thai"],
//   weight: "400",
//   preload: true,
// });

export const metadata: Metadata = {
  title: "Phichayoot Boonton",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
