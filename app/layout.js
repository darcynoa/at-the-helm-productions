import { Inter, Caveat } from "next/font/google";
import "./globals.css";
// import "./globals.js"
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

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
        className={`${inter.variable} ${caveat.variable} bg-black antialiased`}
      >
        <Loading />
        <div
          id="initialCover"
          className="pointer-events-none fixed inset-0 z-[9996] h-[500vh] w-screen bg-black"
        ></div>
        <Navigation />
        <Cursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
