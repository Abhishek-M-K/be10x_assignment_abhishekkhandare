import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider, auth } from "@clerk/nextjs";

import "./globals.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalStyleProvider from "./providers/global-style-provider";
import ContextProvider from "./providers/context-provider";
import NextTopLoader from "nextjs-toploader";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "be10x | Abhishek Khandare",
  description: "Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  const { userId } = auth();
  // useEffect(() => {
    // if(!userId) {
    //   router.push('/signup');
    // }
  // }, [userId]);

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={nunito.className}>
          <NextTopLoader
            height={2}
            color="#27AE60"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

/*
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider, auth } from "@clerk/nextjs";

import "./globals.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalStyleProvider from "./providers/global-style-provider";
import ContextProvider from "./providers/context-provider";
import NextTopLoader from "nextjs-toploader";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "be10x | Abhishek Khandare",
  description: "Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <LayoutWithAuth>{children}</LayoutWithAuth>
    </ClerkProvider>
  );
}

function LayoutWithAuth({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={nunito.className}>
        <NextTopLoader
          height={2}
          color="#27AE60"
          easing="cubic-bezier(0.53,0.21,0,1)"
        />
        <ContextProvider>
          <GlobalStyleProvider>
            {userId && <Sidebar />}
            <div className="w-full">{children}</div>
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
*/
