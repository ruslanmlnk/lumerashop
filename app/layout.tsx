import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumera - Elegantní kožené kabelky z Itálie",
  description: "Obchod s italskými koženými kabelkami, peněženkami a doplňky. Pravá kůže, nadčasový styl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
