import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GloriaBuilds — Premium Land Acquisition in Nigeria",
  description: "Premium land acquisitions across Nigeria's most strategic locations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}