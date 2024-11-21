import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kunal Joshi",
  description:
    "A portfolio website show casing kunal joshi's professional and personal front end web development experience.",
  authors: [{ name: "Kunal joshi" }],
  keywords: [
    "Kunal",
    "Kunal Joshi",
    "Front-end",
    "Web developer",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "NextJS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W29CZNMQ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
