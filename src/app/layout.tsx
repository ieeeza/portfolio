import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "César Pereira - Portfolio",
  description: "É, esse sou eu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
