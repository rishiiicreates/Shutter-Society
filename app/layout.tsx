import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: '--font-bebas' });
const sans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: '--font-sans' });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "Shutter-Society | Cinematic Experiences",
  description: "We don't just shoot content. We create attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased bg-bg text-text-primary">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
