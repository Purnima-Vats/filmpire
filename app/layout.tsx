import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Filmpire",
    description: "Movie streaming platform using NextJS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex h-full">
                    <CssBaseline />
                    <Navbar />
                    <main className="flex-grow-1 p-2">
                        <div className="h-[70px]"/>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
