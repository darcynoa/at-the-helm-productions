import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import ScrollCta from "@/components/ScrollCta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "At The Helm Productions",
  description: "Creative Indie Film Production Company started by Anna Helmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${caveat.variable} antialiased bg-black`}
      >
        {/* <Loading /> */}
        <Navigation />
        {children}
        <ScrollCta />
      </body>
    </html>
  );
}
