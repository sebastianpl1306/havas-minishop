import type { Metadata } from "next";
import { HeaderComponent } from "@/src/Components/HeaderComponent";

import "./globals.css";

export const metadata: Metadata = {
  title: "MiniShop - Encuentra los mejores productos para ti",
  description: "Explora nuestra tienda en línea y descubre una amplia variedad de productos de alta calidad a precios competitivos. ¡Compra ahora y disfruta de ofertas exclusivas!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
