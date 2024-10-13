import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Santosh Pisini",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container my-8">{children}</div>;
}
