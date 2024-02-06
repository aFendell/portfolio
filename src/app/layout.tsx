import type { Metadata } from "next";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";

import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Toaster from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "fendi | Portfolio",
  description: "Assaf Fendell full-stack developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative flex min-h-screen flex-col content-stretch bg-gray-950 font-sans text-gray-50 antialiased",
          inter.className,
        )}>
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-51rem] top-[-1rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        <main className="mx-auto flex max-w-screen-lg flex-1 flex-col items-stretch gap-12 px-3 pb-6 pt-24 sm:gap-20 sm:px-6 sm:pb-20 sm:pt-28">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
