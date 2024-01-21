'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { FireBaseProvider } from "@/context/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <FireBaseProvider>{children} </FireBaseProvider> 
      </body>
    </html>
  );
}
