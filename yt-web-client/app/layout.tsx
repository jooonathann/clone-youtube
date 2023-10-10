import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./navbar/page";

export const metadata: Metadata = {
  title: "Clone YT",
  description: "Youtube Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
