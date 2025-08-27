import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Malazan Book of the Fallen - Character & Group Map",
  description: "Interactive character and group map for the Malazan Book of the Fallen fantasy series through early Memories of Ice.",
  keywords: "Malazan, Steven Erikson, fantasy, characters, groups, map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
