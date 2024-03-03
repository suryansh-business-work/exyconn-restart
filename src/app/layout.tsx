import type { Metadata } from "next";
import "../styles/_globals.scss";
import Footer from "@/components/footer/Footer";
import Header from "@/components/common/Header";
import TopHeader from "@/components/common/TopHeader";
import SocialFooter from "@/components/footer/SocialFooter";
import CopyrightFooter from "@/components/footer/CopyrightFooter";

export const metadata: Metadata = {
  title: "Exyconn",
  description: "Exyconn description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Header />
        {children}
        <Footer />
        <SocialFooter />
        <CopyrightFooter />
      </body>
    </html>
  );
}
