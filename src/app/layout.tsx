import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Contexts/themeContext";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Dev in Progress",
  description:
    "Follow the journey of a young developer passionate about front-end. Tips, projects, and insights on coding, career, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
