import "./globals.css";
import { Tajawal } from "next/font/google";
import Navbar from "@/components/Navbar";

const tajawal = Tajawal({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${tajawal.className} `}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
