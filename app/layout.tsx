import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./globals.css";

export const metadata = {
  title: "Wiki Roket!!!",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
