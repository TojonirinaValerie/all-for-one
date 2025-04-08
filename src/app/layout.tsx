import type { Metadata } from "next";

import { ThemeProvider } from "@/components/themeProvider";
import { Footer } from "@/features/footer";
import Header from "@/features/header/header";
import QueryProvider from "@/provider/queryProvider";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "All For One",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` font-nexa antialiased text-base not-italic`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Suspense fallback={<Loading />}>
              <div className="max-sm:overflow-x-hidden overflow-y-visible">
                <Header />
                {children}
              </div>
              <Footer />
            </Suspense>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
