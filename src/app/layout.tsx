import type { Metadata } from "next";
import "./globals.css";
import { quickSand } from "./fonts";
import Navbar from "@/components/navigation/nav-bar";
import Footer from "@/components/navigation/footer";
import AOSInitializer from "./aos-initializer";

export const metadata: Metadata = {
  title: "Hives Bakes",
  description: "Number one bakery shop in indianna",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${quickSand.className} antialiased overflow-y-auto overflow-x-clip bg-[#FBFFF8]`}
      >
        <Navbar />
        <AOSInitializer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
