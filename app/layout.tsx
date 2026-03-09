import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";

import { CartProvider } from "@/context/CartContext";
import { NavigationProvider } from "@/context/NavigationContext";
import { ProductsProvider } from "@/context/ProductsContext";
import { fetchPayloadHeaderMenuItems } from "@/lib/payload-categories";
import { fetchPayloadProducts } from "@/lib/payload-products";

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
  title: "Lumera - Elegantn\u00ed ko\u017een\u00e9 kabelky z It\u00e1lie",
  description:
    "Obchod s italsk\u00fdmi ko\u017een\u00fdmi kabelkami, pen\u011b\u017eenkami a dopl\u0148ky. Prav\u00e1 k\u016f\u017ee, nad\u010dasov\u00fd styl.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, menuItems] = await Promise.all([
    fetchPayloadProducts(),
    fetchPayloadHeaderMenuItems(),
  ]);
  return (
    <html lang="cs">
      <body
        className={`${cormorantGaramond.variable} ${workSans.variable} antialiased font-sans`}
      >
        <NavigationProvider initialMenuItems={menuItems}>
          <ProductsProvider initialProducts={products}>
            <CartProvider>{children}</CartProvider>
          </ProductsProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
