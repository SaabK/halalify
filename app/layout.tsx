import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import SupbaseProvider from "@/providers/SupabaseProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Halalify",
    description: "Islamic Spotify; A better one",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <SupbaseProvider>
                    <Sidebar>{children}</Sidebar>
                </SupbaseProvider>
            </body>
        </html>
    );
}
