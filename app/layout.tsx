import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";



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
    <html lang="fa" dir="rtl">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        <main className="bg-amber-200">{children}</main>
      </body>
    </html>
  );
}
