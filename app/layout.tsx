import type { Metadata } from "next";

import { CartProvider } from "@/context/CartContext";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lumera - Elegantní kožené kabelky z Itálie",
  description: "Obchod s italskými koženými kabelkami, peněženkami a doplňky. Pravá kůže, nadčasový styl.",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${cormorantGaramond.variable} ${workSans.variable} antialiased font-sans`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
