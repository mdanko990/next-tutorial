import { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Authentication",
};

export default function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <main className="flex column w-full h-full justify-center items-center p-4">
          {children}
        </main>
    </>
  );
}
