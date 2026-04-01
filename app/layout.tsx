import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito", // optional (biar fleksibel)
});

export const metadata: Metadata = {
  title: "ZiyadBooks",
  description:
    "Jelajahi koleksi buku pilihan kami. Temukan buku terlaris, pemesanan awal, dan diskon khusus di ZiyadBooks.",
  openGraph: {
    title: "ZiyadBooks",
    description:
      "Jelajahi koleksi buku pilihan kami. Temukan buku terlaris, pemesanan awal, dan diskon khusus di ZiyadBooks.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
