import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import PreloadAssets from "@/components/tools/preload";
import Head from "next/head";

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
      <Head>
        <link
          rel="preload"
          href="/images/banner/b-banner.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false} // ให้เปลี่ยนเป็น false เพื่อให้การเปลี่ยนโหมดมีการ transition
        >
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
