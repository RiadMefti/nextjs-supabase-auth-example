import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/Buttons/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Central ",
  description:
    "Community Central is an application designed to enable users to create, manage, and engage with their own online communities through events, posts, and real-time interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
