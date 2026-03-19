import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import "./globals.js";
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { client } from "../app/sanity/client";

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

const NAVIGATION_QUERY = `*[_type == "navigation"][0]`;
const FOOTER_QUERY = `*[_type == "footer"][0]`;

const options = { next: { revalidate: 30 } };

export default async function RootLayout({ children }) {
  const navigationData = await client.fetch(NAVIGATION_QUERY, {}, options);
  const footerData = await client.fetch(FOOTER_QUERY, {}, options);

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
        <Navigation navigationData={navigationData} />
        <Cursor />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
