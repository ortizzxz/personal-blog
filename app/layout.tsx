import type { Metadata } from "next";
import "./assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "OrtizTech",
  description: "A Portfolio with some writing made by Jesus Ortiz",
  verification: {
    google: "vZLXFrB9nDHb9eFf8TPWLKy433Ec0L9V1jCwH7tEMk4",
  },
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
        <Analytics />
      </body>
    </html>
  );
}