import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import PreloadAssets from "@/components/tools/preload";

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
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          {/* <PreloadAssets>{children}</PreloadAssets> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
