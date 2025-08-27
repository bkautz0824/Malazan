import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
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
        className={`${inter.variable} ${crimsonPro.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
