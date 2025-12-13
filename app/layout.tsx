import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/ui/Container";
import SideBar from "@/components/sideBar/SideBar";

export const metadata: Metadata = {
  title: "Navid Salehi blog",
  description: "Navid Salehi blog",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiasedvs`}>
        <Navbar />
        <main>
          <Container className="py-25 ">
            <div className="flex flex-col xl:grid xl:grid-cols-4 gap-5">
              <div className="xl:col-span-3 xl:h-screen">
                {children}
              </div>
              <div className=" xl:col-span-1 ">
                <SideBar />
              </div>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
