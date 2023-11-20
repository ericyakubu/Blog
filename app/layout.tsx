import type { Metadata } from "next";
import "../styles/global.scss";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Blog",
  description: "New generation of blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
