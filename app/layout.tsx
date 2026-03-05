import type { Metadata } from "next";
import "./assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "OrtizTech",
  description: "A Portfolio with some writing made by Jesus Ortiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
