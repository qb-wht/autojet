import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Header } from "@/0_widgets/header";
import { Footer } from "@/0_widgets/footer";

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
