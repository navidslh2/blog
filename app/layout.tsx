import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Navid Salehi blog",
  description: "Navid Salehi blog",
  icons:{icon:"/favicon.png"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
