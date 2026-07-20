import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {

  title: "Tyler Canto | Infrastructure Engineer",

  description:
    "Portfólio profissional de Tyler Canto com projetos em infraestrutura, backup, datacenter, redes e cybersecurity.",

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >

      <body>

        {children}

      </body>

    </html>

  );

}