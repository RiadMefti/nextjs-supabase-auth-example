import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/ModeToggle";
import NavBar from "@/components/ui/navBar/NavBar";

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
          <NavBar />

          <div className="p-32">
            {" "}
            {/* Add padding top equivalent to the height of your navbar */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
