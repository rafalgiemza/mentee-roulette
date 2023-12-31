import "~/styles/globals.css";

import React from "react";
import { CurrentUserProvider } from "~/providers/CurrentUserProvider";
import { Inter } from "next/font/google";
import { Navbar } from "~/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`font-sans ${inter.variable}`}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ededf2] to-[#b2abd8]">
            <CurrentUserProvider>
                <Navbar />
            </CurrentUserProvider>
            {children}
        </div>
      </body>
    </html>
  );
}
