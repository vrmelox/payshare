import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayShare",
  description: "Suivre, répartir et régler des dépenses communes en toute simplicité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${epilogue.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
