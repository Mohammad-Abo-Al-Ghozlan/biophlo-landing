import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIOPHLO | Biology Made Clear",
  description:
    "Clear, visual biology lessons and focused practice for school students.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
