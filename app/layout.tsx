import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Providers } from "./providers";
import localfont from "next/font/local";
import { cx } from "@/utils/all";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });


const russo = localfont(
  {
    src: [
      {
          path: "../public/fonts/RussoOne-Regular.ttf",
          weight: "700",
      },
    ],
    variable: "--font-russo"
  });

  const osw = localfont(
    {
      src: [
        {
            path: "../public/fonts/Oswald-VariableFont_wght.ttf",
            weight: "700",
        },
      ],
      variable: "--font-osw"
    });


  // const russo = localfont(
  //   {
  //     src: [
  //       {
  //           path: "../public/fonts/RussoOne-Regular.ttf",
  //           weight: "700",
  //       },
  //     ],
  //     variable: "--font-russo"
  //   });

export const metadata: Metadata = {
  title: "Bio DDD",
  description: "Кажете чао на вредителите във Вашият дом или работно място!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(russo.variable, osw.variable)}
    > 
    <div className="bg-white dark:bg-dblue">
    
      <Providers>
      <NavbarDemo />
      <body className={russo.className}>{children}</body>
      <Footer />
      </Providers>
      </div>
    </html>
  );
}
