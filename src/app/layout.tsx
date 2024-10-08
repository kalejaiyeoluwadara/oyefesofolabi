import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Oyefeso Afolabi",
  description: "Oyefeso Afolabi",
  icons: {
    icon: [
      {
        url: "/fav.png",
        href: "/fav.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
